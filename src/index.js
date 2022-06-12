import './sass/main.scss';
var _ = require('lodash');
import { getData, getDataSingleCard, getDataGenre, getDataByInput } from './js/api';
// import { refs } from './js/refs';
// import { modalCardItem } from './js/modalFilm';
import { singleCardItem } from './js/searchItemList';

import { onFormSubmit } from './js/searchByName';
import {onStudentsClick, onModalPressEsc, closeModalOnBackdropClick, closeModalOnCrossClick} from './js/modalTeam';

import { onClickPagSearch } from './js/paginator';

import { onLogoClick } from './js/header';
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

// _.toArray({ 'a': 1, 'b': 2 });
// // => [1, 2]

// var object = { 'a': 1, 'b': '2', 'c': 3 };

// _.pick(object, ['a', 'c']);
// // => { 'a': 1, 'c': 3 }

// .trim()
