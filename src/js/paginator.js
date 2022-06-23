import { getDataSingleCard, getDataGenre, getDataByInput } from './api';
import { refs } from './refs';
import { getAllCardFilms } from './get-popular-films-for-render';
import singleCardTpl from '../templates/single-card.hbs';
import Notiflix from 'notiflix';
import { getCardByName } from './get-films-by-name';

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
  <button class="pager__link is-hidden" id="left">&#9837;
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
  const currentPage = document.querySelector('button.pager__link.pag.current-accent-page');
  const prev = document.querySelector('#left');
  const next = document.querySelector('#rigth');
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  // карент пейдж бекграунд
  document
    .querySelectorAll('.pager__link')
    .forEach(el => el.classList.remove('current-accent-page'));
          // e.target.classList.add('current-accent-page');

  e.target.classList.add('current-accent-page');
  // міняемо цифру кнопок
  switch (e.target.id) {
    case 'rigth':
      document.querySelectorAll('.pag').forEach(el => {
        el.dataset.page = Number(el.dataset.page) + 1;
        el.textContent = el.dataset.page;
      });
      prev.classList.remove('is-hidden');
      return;

    case 'left':
      document.querySelectorAll('.pag').forEach(el => {
        el.dataset.page = Number(el.dataset.page) - 1;
        el.textContent = el.dataset.page;
      });
      if (document.querySelectorAll('.pag')[0].dataset.page === '1') {
        prev.classList.add('is-hidden');
        return;
      }
      return;

    default:
      console.log('все гуд');
  }

  /// запись выбранной в пагинаторе страницы в localStorage
  let pageNumber = e.target.dataset.page;
  localStorage.setItem('pageNumber', pageNumber);

  // рендер пейджа по номеру натиснутої кнопки
  switch (refs.inputEl.value === '' && e.target.classList.contains('pag')) {
    case false:
      const response = await getCardByName(refs.inputEl.value, Number(pageNumber));
      refs.container.innerHTML = singleCardTpl(response.results);
      break;
    case true:
      pageNumber = localStorage.getItem('pageNumber');

      const allCardFilms = await getAllCardFilms(pageNumber);
      const markup = singleCardTpl(allCardFilms.results);

      refs.container.innerHTML = '';
      refs.container.insertAdjacentHTML('beforeend', markup);
      index = allCardFilms.page;

      if (document.querySelectorAll('.pag')[5].dataset.page > 6) {
        prev.classList.remove('is-hidden');
      }

      // вішаем бекграунд на поточну кнопку
      if (index === Number(e.target.textContent)) {
        e.target.classList.add('current-accent-page');

        // делаем кнопку со значком "♭" скрытой при текущей странице = 1
        if (document.querySelectorAll('.pag')[0] > Number('1')) {
          prev.classList.remove('is-hidden');
        }
      }
      break;

    default:
      console.log('чет пошло не так');
  }
}

export { renderButtons, onClickPagSearch };
