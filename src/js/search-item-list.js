import { getDataSingleCard, getDataGenre } from './api';
import singleCardTpl from '../templates/single-card.hbs';
import { refs } from './refs';
import { observeOnLastElOfGallery } from './infinit-scr';
import { modalCardItem } from './modal-film';
import { openModalFilmById } from './open-and-close-modal';
import { renderButtons, onClickPagSearch } from './paginator';
import { getAllCardFilms } from './get-popular-films-for-render';
let numPage = 0;

// фун. рендеру запроса популярних фильмов
async function singleCardItem(num) {
  // numPage += 1;
  numPage = localStorage.getItem('pageNumber');
  let allCardFilms;

  try {
    // запрос на популярні
    // перевірка чи ми зараз на мобілі якщо так то локал сторідж вимикаемо
    if (num) {
      allCardFilms = await getAllCardFilms(num);
      const markup = singleCardTpl(allCardFilms.results);
      refs.container.insertAdjacentHTML('beforeend', markup);
    } else {
      allCardFilms = await getAllCardFilms(numPage);
      const markup = singleCardTpl(allCardFilms.results);
      refs.container.insertAdjacentHTML('beforeend', markup);
    }

    // запуск інфінітскрола на мобілку
    if (document.querySelector('body').scrollWidth < 767) {
      // numPage += 1;
      document.querySelector('.nav').classList.add('visually-hidden');
      observeOnLastElOfGallery(document.querySelectorAll('.movie-card'));
    }

    // показуем пагінатора
    document.querySelector('.nav').classList.remove('is-hidden');

    // рендер кнопок пагинатора
    refs.pagContainer.insertAdjacentHTML('afterbegin', renderButtons(6));
    const pagesButtons = document.querySelectorAll('.pager__link');

    // підсвічуем поточну сторінку
    pagesButtons[allCardFilms.page].classList.add('current-accent-page');

    // слухач пагинатора при кліке
    document.querySelector('.nav').addEventListener('click', onClickPagSearch);
  } catch (error) {
    console.log(error);
  } finally {
    if (document.querySelector('body').scrollWidth > 767) {
      numPage = 0;
    }
  }
}

// слушатель на список кнопок пагинатора
document.querySelector('.nav').addEventListener('click', onClickPagSearch);

// слухач контейнера з філ.
refs.container.addEventListener('click', openModalFilmById);

export { singleCardItem };
