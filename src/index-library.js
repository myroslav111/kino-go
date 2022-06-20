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
import { onAddToQueueBtnClickForLocalStorage } from './js/on-add-to-queue-btn-click-for-local-storage';
import { onAddToWatchedBtnClickForLocalStorage } from './js/on-add-to-watched-btn-click-for-local-storage';

onWatchedBtnClick();

// для localStorage
refs.showQueueBtn.addEventListener('click', onAddToQueueBtnClickForLocalStorage);
refs.showWatchedBtn.addEventListener('click', onAddToWatchedBtnClickForLocalStorage);

// // для бэкэнда
// refs.showQueueBtn.addEventListener('click', onQueueBtnClick);
// refs.showWatchedBtn.addEventListener('click', onWatchedBtnClick);
