import { getDataSingleCard, getDataGenre } from './api';
import { refs } from './refs';
import singleCard from '../templates/singleCard.hbs';

function renderButtons(count) {
  const button = [];
  for (let i = 1; i <= count; i++) {
    if (i.toString() === i.toString()) {
      button.push(
        `<li class="pager__item"><button class="pager__link pag"  data-page="${i}">${i}</button></li>`,
      );
    } else {
      button.push(
        `<li class="pager__item active" ><button class="pager__link pag" data-page="${i}">${i}</button></li>`,
      );
    }
  }
  const murkap = button.join('');

  return ` <li class="pager__item pager__item--prev">
  <button class="pager__link" id="left">&#9837;

  </button>
</li>

${murkap}

<li class="pager__item pager__item--next">
  <button class="pager__link" id="rigth">&#9839;

  </button>
</li>`;
}

async function onClickPagSearch(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (e.target.id === 'rigth') {
    document.querySelectorAll('.pag').forEach(el => {
      el.dataset.page = Number(el.dataset.page) + 1;
      el.textContent = el.dataset.page;
    });
    return;
  }

  if (e.target.id === 'left') {
    if (document.querySelectorAll('.pag')[0].dataset.page === '1') {
      return;
    }
    document.querySelectorAll('.pag').forEach(el => {
      el.dataset.page = Number(el.dataset.page) - 1;
      el.textContent = el.dataset.page;
    });
    return;
  }

  const res = await (await getDataSingleCard(e.target.dataset.page)).data;
  const dataCinema = res.results;
  const markup = singleCard(dataCinema);
  refs.container.innerHTML = '';
  refs.container.insertAdjacentHTML('beforeend', markup);
}

export { renderButtons, onClickPagSearch };
