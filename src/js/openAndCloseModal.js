import { modalCardItem } from './modalFilm';
import { refs } from './refs';

function openModalFilmById(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  modalCardItem(e.target.id);
  refs.modal.classList.remove('is-hidden');
}

function closeModalFilm(e) {
  console.log(e.target);
  if (e.target.nodeName === 'SECTION' || e.target.nodeName === 'BUTTON') {
    refs.modal.classList.add('is-hidden');
  }
}

export { openModalFilmById, closeModalFilm };
