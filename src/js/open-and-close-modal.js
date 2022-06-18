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
    closeYouTube();
    if (e.code === 'Escape') {
      document.removeEventListener('keydown', closeModalFilm);
    }
  }
  // console.log(refs.library.classList.contains('current'));
  // if (
  //   refs.library.classList.contains('current') &&
  //   refs.showWatchedBtn.classList.contains('color-orange')
  // ) {
  //   onWatchedBtnClick();
  // }
}

export { openModalFilmById, closeModalFilm };
