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
import { onClickPagSearch } from './js/paginator';

onWatchedBtnClick();
refs.showQueueBtn.addEventListener('click', onQueueBtnClick);
refs.showWatchedBtn.addEventListener('click', onWatchedBtnClick);
