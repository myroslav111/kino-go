import './sass/main.scss';

import { getData, getDataSingleCard, getDataGenre, getDataByInput } from './js/api';
// import { refs } from './js/refs';
// import { modalCardItem } from './js/modal-film';
import { singleCardItem } from './js/search-item-list';

// import { onFormSubmit } from './js/search-by-name';
import {
  onStudentsClick,
  onModalPressEsc,
  closeModalOnBackdropClick,
  closeModalOnCrossClick,
} from './js/modal-team';

import { onClickPagSearch } from './js/paginator';

// import { onLogoClick } from './js/header';
// import { startingPage } from './js/starting-page';

// function startingPage() {
//   document.querySelector('.video').classList.remove('hidden');
//   setTimeout(() => {
//     try {
//       singleCardItem();
//     } catch (error) {
//     } finally {
//       document.querySelector('.video').classList.add('hidden');
//     }
//   }, 7000);
// }

// startingPage();

// singleCardItem();

// getDataByInput('bad boy', 2);
// getDataGenre();

// _.toArray({ 'a': 1, 'b': 2 });
// // => [1, 2]

// var object = { 'a': 1, 'b': '2', 'c': 3 };

// _.pick(object, ['a', 'c']);
// // => { 'a': 1, 'c': 3 }

// .trim()
