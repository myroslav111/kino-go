import { getDataSingleCard, getDataGenre, getDataByInput } from './api';
import { refs } from './refs';
import singleCardTpl from '../templates/single-card.hbs';

// фун. створення кнопок 
function renderButtons(count) {
  const button = [];
  for (let i = 1; i <= count; i++) {
    if (i.toString() === i.toString()) {
      button.push(
        `<li class="pager__item"><button class="pager__link pag"  data-page="${i}">${i}</button></li>`,
      );
    } else {
      button.push(
        `<li class=".pager__item.active ><button class="pager__link pag" data-page="${i}">${i}</button></li>`,
      );
    }
  }
  const markup = button.join('');
  return ` <li class="pager__item pager__item--prev">
  <button class="pager__link" id="left">&#9837;
  </button>
    </li>
     ${markup}
    <li class="pager__item pager__item--next">
    <button class="pager__link" id="rigth">&#9839;
   </button>
  </li>`;
}

let index;
// фун. роботи пагінатора
async function onClickPagSearch(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  // карент пейдж бекграунд
  document
    .querySelectorAll('.pager__link')
    .forEach(el => el.classList.remove('current-accent-page'));

  // міняемо цифру кнопок
  switch (e.target.id) {
    case 'rigth':
      document.querySelectorAll('.pag').forEach(el => {
        el.dataset.page = Number(el.dataset.page) + 1;
        el.textContent = el.dataset.page;
      });
      return;

    case 'left':
      if (document.querySelectorAll('.pag')[0].dataset.page === '1') {
        return;
      }
      document.querySelectorAll('.pag').forEach(el => {
        el.dataset.page = Number(el.dataset.page) - 1;
        el.textContent = el.dataset.page;
      });
      return;

    default:
      console.log('чет пошло не так');
  }

  // рендер пейджа по номеру натиснутої кнопки
  switch (document.querySelector('input').value === '') {
    case false:
      const response = await (
        await getDataByInput(document.querySelector('input').value, e.target.dataset.page)
      ).data;
      refs.container.innerHTML = singleCardTpl(response.results);
      break;

    case true:
      const res = await (await getDataSingleCard(e.target.dataset.page)).data;
      const dataCinema = res.results;
      const markup = singleCardTpl(dataCinema);

      refs.container.innerHTML = '';
      refs.container.insertAdjacentHTML('beforeend', markup);
      index = res.page;

      // вішаем бекграунд на поточну кнопку
      if (index === Number(e.target.textContent)) {
        e.target.classList.add('current-accent-page');
      }
      break;

    default:
      console.log('чет пошло не так');
  }
}

export { renderButtons, onClickPagSearch };
