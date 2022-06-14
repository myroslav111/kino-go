import { getDataSingleCard, getDataGenre } from './api';
import singleCard from '../templates/single-card.hbs';
import { refs } from './refs';
import { observeOnLastElOfGallery } from './infinit-scr';
import { modalCardItem } from './modal-film';
import { openModalFilmById } from './open-and-close-modal';
import { renderButtons, onClickPagSearch } from './paginator';
let num = 0;

// фун. рендеру запроса
async function singleCardItem() {
  num += 1;
  try {
    const res = await (await getDataSingleCard(num)).data;
    const dataCinema = res.results;
    const markup = singleCard(dataCinema);
    refs.container.insertAdjacentHTML('beforeend', markup);

    if (document.querySelector('body').scrollWidth < 767) {
      document.querySelector('.nav').classList.add('visually-hidden');
      observeOnLastElOfGallery(document.querySelectorAll('.movie-card'));
    }

    document.querySelector('.nav').classList.remove('is-hidden');

    refs.pagContainer.insertAdjacentHTML('afterbegin', renderButtons(6));

    document.querySelector('.nav').addEventListener('click', onClickPagSearch);
  } catch (error) {
    console.log(error);
  }
}

// слушатель на список кнопок пагинатора
document.querySelector('.nav').addEventListener('click', onClickPagSearch);

// слухач контейнера з філ.
refs.container.addEventListener('click', openModalFilmById);

export { singleCardItem };
