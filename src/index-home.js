import './sass/main.scss';



import { getData, getDataSingleCard, getDataGenre, getDataByInput, getTrailer } from './js/api';

// import { refs } from './js/refs';
// import { modalCardItem } from './js/modal-film';
import { singleCardItem } from './js/search-item-list';

import { onFormSubmit } from './js/search-by-name';
import {
  onStudentsClick,
  onModalPressEsc,
  closeModalOnBackdropClick,
  closeModalOnCrossClick,
} from './js/modal-team';

import { onClickPagSearch } from './js/paginator';

import { onLogoClick } from './js/header';
// import { startingPage } from './js/starting-page';

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

// // вариант артема
// let q;
// getDataGenre().then(data => (q = data));
// // console.log(q.genres);
// getDataSingleCard().then(data => {
//   // console.log(data.data.results);
//   const films = data.data.results;

//   const x = films.reduce((acc, { genre_ids }) => {
//     // console.log(genre_ids);
//     console.log(q.genres);

//     const r = q.genres
//       .filter(el => {
//         return genre_ids.includes(el.id);
//       })
//       .map(({ name }) => {
//         name;
//       });
//     console.log();
//     return acc + r.join(',');
//   }, '');

//   console.log(x);
// });

//////////////////////
// мой вариант
// async function f() {
//   const resG = await getDataGenre();
//   // console.log(resG);

//   const resC = await getDataSingleCard();
//   const arrC = resC.data.results;
//   // console.log(arrC);

//   const x = arrC.reduce((acc, { genre_ids }) => {
//     const genresId = genre_ids;
//     let g = [];
//     // console.log(genresId);
//     // console.log(resG);
//     genresId.map(el => {
//       console.log();
//       const genre = resG.genres.filter(({ id, name }) => {
//         // console.log(el);
//         if (id === el) {
//           // console.log(name);
//           return name;
//         }
//         // if (element.id === el) {
//         //   console.log(element);
//         //   // newEl = element.name;
//         //   return element.name;
//         // }
//         // console.log(newEl);
//         // return newEl;
//       });
//       // console.log(genre[0].name);
//       genre_ids.length = 0;
//       g.push(genre[0].name);

//       // genre_ids.push(genre[0].name);

//       // console.log(el);
//     });
//     console.log(genre_ids);
//     // return g;
//   }, []);
//   // console.log(g);
// }
// f();
