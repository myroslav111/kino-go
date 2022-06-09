import { getDataSingleCard, getDataGenre } from './api';
import singleCard from '../templates/singleCard.hbs';
import { refs } from './refs';
import { observeOnLastElOfGallery } from './infinit-scr';
import { modalCardItem } from './modalFilm';
import { openModalFilmById } from './openAndCloseModal';
let num = 0;

// фун. рендеру запроса
async function singleCardItem() {
  num += 1;
  try {
    const res = await (await getDataSingleCard(num)).data;
    const dataCinema = res.results;
    const markup = singleCard(dataCinema);
    refs.container.insertAdjacentHTML('beforeend', markup);
    observeOnLastElOfGallery(document.querySelectorAll('.movie-card'));
  } catch (error) {
    console.log(error);
  }
}

// слухач контейнера з філ.
refs.container.addEventListener('click', openModalFilmById);

export { singleCardItem };
