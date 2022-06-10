import { getDataSingleCard, getDataGenre } from './api';
import { refs } from './refs';
import singleCard from '../templates/singleCard.hbs';

function renderButtons(count) {
  const button = [];
  for (let i = 1; i <= count; i++) {
    if (i.toString() === i.toString()) {
      button.push(
        `<li class="pager__item"><button class="pager__link"  data-page="${i}">${i}</button></li>`,
      );
    } else {
      button.push(
        `<li class="pager__item active" ><button class="pager__link" data-page="${i}">${i}</button></li>`,
      );
    }
  }
  //   currentPage.toString()
  return button.join('');
}

async function onClickPagSearch(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(e.target.dataset.page);

  const res = await (await getDataSingleCard(e.target.dataset.page)).data;
  const dataCinema = res.results;
  const markup = singleCard(dataCinema);
  //   console.log(dataCinema);
  //   console.log(markup);
  //   console.log(res);
  console.log(e.target);
  refs.container.innerHTML = '';
  refs.container.insertAdjacentHTML('beforeend', markup);
  //   getDataSingleCard(e.target.dataset.page);
}

export { renderButtons, onClickPagSearch };
