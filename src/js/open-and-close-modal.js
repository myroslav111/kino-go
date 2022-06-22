import { modalCardItem } from './modal-film';
import { refs } from './refs';
import { closeYouTube } from './youTube';
import { onWatchedBtnClick } from './on-watched-btn-click';

// фун. открытия модалки
function openModalFilmById(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  modalCardItem(e.target.id);
  refs.modal.classList.remove('is-hidden');
  if (document.querySelector('body')) {
    document.querySelector('body').classList.add('stop-scrolling');
  }
  if (document.querySelector('#body-library')) {
    document.querySelector('#body-library').classList.add('stop-scrolling');
  }
  document.addEventListener('keydown', closeModalFilm);
  if (refs.scrollToTopBtn) {
    refs.scrollToTopBtn.classList.add('is-hidden');
  }
}

// фун. закрытия модалки
function closeModalFilm(e) {
  if (
    e.target.nodeName === 'SECTION' ||
    e.target.classList.contains('close-btn-modal') ||
    e.code === 'Escape'
  ) {
    refs.modal.classList.add('is-hidden');
    if (document.querySelector('body')) {
      document.querySelector('body').classList.remove('stop-scrolling');
    }
    if (document.querySelector('#body-library')) {
      document.querySelector('#body-library').classList.remove('stop-scrolling');
    }
    if (refs.scrollToTopBtn && refs.scrollToTopBtn.classList.contains('is-hidden')) {
      refs.scrollToTopBtn.classList.remove('is-hidden');
    }
    closeYouTube();
    if (e.code === 'Escape') {
      document.removeEventListener('keydown', closeModalFilm);
    }
  }
}

export { openModalFilmById, closeModalFilm };
