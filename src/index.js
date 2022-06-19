import './sass/main.scss';
import { getData, getDataSingleCard, getDataGenre, getDataByInput, getTrailer } from './js/api';
import { refs } from './js/refs';
import { modalCardItem } from './js/modal-film';
import { singleCardItem } from './js/search-item-list';
import { onFormSubmit } from './js/search-by-name';
import { onLogoClick } from './js/header';
import { onClickPagSearch } from './js/paginator';
import {
  onStudentsClick,
  onModalPressEsc,
  closeModalOnBackdropClick,
  closeModalOnCrossClick,
} from './js/modal-team';
import { scrollToTop } from './js/back-to-top-button';
// import './js/youTube';
// import { refs } from './js/refs';
// import { startingPage } from './js/starting-page';
import { onYouTubeIframeAPIReady } from './js/youTube';
import { getDataBackEnd, putDataBackEnd } from './js/api-back-end';

function startingPage() {
  document.querySelector('.video').classList.remove('hidden');
  setTimeout(() => {
    try {
      singleCardItem();
    } catch (error) {
    } finally {
      document.querySelector('.video').classList.add('hidden');
    }
  }, 7000);
}

// startingPage();

singleCardItem();
