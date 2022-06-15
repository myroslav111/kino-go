import { modalCardItem } from './modal-film';
import { refs } from './refs';

// фун. открытия модалки
function openModalFilmById(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  modalCardItem(e.target.id);
  refs.modal.classList.remove('is-hidden');
  refs.headerEl.classList.add('is-hidden');

  document.addEventListener('keydown', closeModalFilm);
}

// фун. закрытия модалки
function closeModalFilm(e) {
  // console.log(e.target);
  if (e.target.nodeName === 'SECTION' || e.target.nodeName === 'BUTTON' || e.code === "Escape") {
    refs.modal.classList.add('is-hidden');
    refs.headerEl.classList.remove('is-hidden');
    if(e.code === "Escape"){
            document.removeEventListener('keydown', closeModalFilm)
           }
  }
}

export { openModalFilmById, closeModalFilm };
