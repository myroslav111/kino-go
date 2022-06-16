import { getDataSingleCard, getDataGenre } from './api';
import singleCard from '../templates/single-card.hbs';
import { refs } from './refs';
import { observeOnLastElOfGallery } from './infinit-scr';
import { modalCardItem } from './modal-film';
import { openModalFilmById } from './open-and-close-modal';
import { renderButtons, onClickPagSearch } from './paginator';
let numPage = 0;

// фун. рендеру запроса популярних фильмов
async function singleCardItem() {
  numPage += 1;
  try {
    // запрос на популярні
    const res = await (await getDataSingleCard(numPage)).data;
    const dataCinema = res.results;
    const markup = singleCard(dataCinema);
    refs.container.insertAdjacentHTML('beforeend', markup);

    // запуск інфінітскрола на мобілку
    if (document.querySelector('body').scrollWidth < 767) {
      document.querySelector('.nav').classList.add('visually-hidden');
      observeOnLastElOfGallery(document.querySelectorAll('.movie-card'));
    }

    // показуем пагінатора
    document.querySelector('.nav').classList.remove('is-hidden');

    // рендер кнопок пагинатора
    refs.pagContainer.insertAdjacentHTML('afterbegin', renderButtons(6));
    const pagesButtons = document.querySelectorAll('.pager__link');

    // підсвічуем поточну сторінку
    pagesButtons[res.page].classList.add('current-accent-page');

    // слухач пагинатора при кліке
    document.querySelector('.nav').addEventListener('click', onClickPagSearch);
  } catch (error) {
    console.log(error);
  } finally {
    numPage = 0;
  }
}

// слушатель на список кнопок пагинатора
document.querySelector('.nav').addEventListener('click', onClickPagSearch);

// слухач контейнера з філ.
refs.container.addEventListener('click', openModalFilmById);

export { singleCardItem };
