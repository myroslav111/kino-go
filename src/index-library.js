import './sass/main.scss';
import { getData, getDataSingleCard, getDataGenre, getDataByInput } from './js/api';
import { refs } from './js/refs';
import { singleCardItem } from './js/search-item-list';
import { onWatchedBtnClick } from './js/on-watched-btn-click';
import { onQueueBtnClick } from './js/on-queue-btn-click';
import {
  onStudentsClick,
  onModalPressEsc,
  closeModalOnBackdropClick,
  closeModalOnCrossClick,
} from './js/modal-team';
import { onLogoClick } from './js/on-logo-click';
import { onClickPagSearch } from './js/paginator';

import { onQueueBtnClickForLocalStorage } from './js/on-queue-btn-click-for-local-storage';
import { onWatchedBtnClickForLocalStorage } from './js/on-watched-btn-click-for-local-storage';

import { openModalFilmById, closeModalFilm } from './js/open-and-close-modal';



// // // для localStorage раскомментировать
// onWatchedBtnClickForLocalStorage();
// refs.showQueueBtn.addEventListener('click', onQueueBtnClickForLocalStorage);
// refs.showWatchedBtn.addEventListener('click', onWatchedBtnClickForLocalStorage);
// console.log("Сейчас у нас работает localStorage");


// для бэкэнда раскомментировать
onWatchedBtnClick();
refs.showQueueBtn.addEventListener('click', onQueueBtnClick);
refs.showWatchedBtn.addEventListener('click', onWatchedBtnClick);
console.log("Сейчас у нас работает back-end");

