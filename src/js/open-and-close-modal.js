import { modalCardItem } from './modal-film';
import { refs } from './refs';
import { closeYouTube } from './youTube';

// фун. открытия модалки
function openModalFilmById(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  modalCardItem(e.target.id);
  refs.modal.classList.remove('is-hidden');
  // console.log(refs.headerEl);
  // refs.headerEl.classList.add('is-hidden');
  document.addEventListener('keydown', closeModalFilm);
}

// фун. закрытия модалки
function closeModalFilm(e) {
  if (
    e.target.nodeName === 'SECTION' ||
    e.target.classList.contains('close-btn-modal') ||
    e.code === 'Escape'
  ) {
    refs.modal.classList.add('is-hidden');
    // refs.headerEl.classList.remove('is-hidden');
    closeYouTube();
    if (e.code === 'Escape') {
      document.removeEventListener('keydown', closeModalFilm);
    }
  }
}

export { openModalFilmById, closeModalFilm };
