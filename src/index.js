import './sass/main.scss';
import { getData, getDataSingleCard, getDataGenre, getDataByInput } from './js/api';
// import { refs } from './js/refs';
// import { modalCardItem } from './js/modalFilm';
import { singleCardItem } from './js/searchItemList';

import { onFormSubmit } from './js/searchByName';
import { onStudentsClick, onModalPressEsc, closeModal } from './js/modalTeam';

import { onClickPagSearch } from './js/paginator';

// import { startingPage } from './js/startingPage';

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

// getDataByInput('bad boy', 2);
// getDataGenre();
