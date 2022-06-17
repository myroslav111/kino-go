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

// import './js/youTube';
// import { refs } from './js/refs';

// import { startingPage } from './js/starting-page';

// import { startingPage } from './js/startingPage';
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

// console.log('d');
// // вариант артема
// let q;

//   //   el.textContent = x;
//   //   // console.dir(el);
//   // });
//   console.log(x);
// });

//////////////////////
// мой вариант
// async function f() {
//   const resG = await getDataGenre();

//   const resC = await getDataSingleCard();
//   const arrC = resC.data.results;
//   console.log(arrC);
//   const x = arrC.map(({ genre_ids }) => {
//     const genresId = genre_ids;
//     console.log(genre_ids);
//     let g = [];
//     genresId.map(el => {
//       const genre = resG.genres.filter(({ id, name }) => {
//         if (id === el) {
//           // console.log(name);
//           return name;
//         }
//       });
//       return g.push(genre[0].name);
//     });
//     console.log(g.join(','));
//     console.dir();
//   const w = document.querySelectorAll('.genre-name');
//   w.forEach(el => (el.textContent = g.join(',')));
//   return g.join(',');
// });
//   console.log(x);
// }
// f();
