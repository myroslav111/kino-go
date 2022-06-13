import './sass/main.scss';
import { getData, getDataSingleCard, getDataGenre, getDataByInput } from './js/api';
// import { refs } from './js/refs';
// import { modalCardItem } from './js/modalFilm';
import { singleCardItem } from './js/searchItemList';

import { onFormSubmit } from './js/searchByName';
import {
  onStudentsClick,
  onModalPressEsc,
  closeModalOnBackdropClick,
  closeModalOnCrossClick,
} from './js/modalTeam';

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

// let q;
// getDataGenre().then(data => (q = data));
// // console.log(q.genres);
// getDataSingleCard().then(data => {
//   console.log(data.data.results);
//   const films = data.data.results;

//   const x = films.reduce((acc, { genre_ids }) => {
//     // console.log(genre_ids);
//     console.log(q);

//     const r = q.genres
//       .filter(el => {
//         return genre_ids.includes(el.id);
//       })

//       .map(({ name }) => name);
//     return acc + r.join(',');
//   }, '');

//   console.log(x);
// });

// let q;
// getDataGenre().then(data => (q = data));
// // console.log(q);
// getDataSingleCard().then(data => {
//   console.log(data.data.results);
//   const films = data.data.results;

//   const x = films.reduce((acc, { genre_ids }) => {
//     // console.log(genre_ids);
//     console.log(q);

//     const r = q.genres
//       .filter(el => {
//         return genre_ids.includes(el.id);
//       })

//       .map(({ name }) => name);
//     return acc + r.join(',');
//   }, '');

//   console.log(x);
// });

async function f() {
  const resG = await getDataGenre();
  // console.log(resG);

  const resC = await getDataSingleCard();
  const arrC = resC.data.results;
  // console.log(arrC);

  const x = arrC.reduce((acc, { genre_ids }) => {
    const genresId = genre_ids;
    let g = [];
    // console.log(genresId);
    // console.log(resG);
    genresId.map(el => {
      console.log();
      const genre = resG.genres.filter(({ id, name }) => {
        // console.log(el);
        if (id === el) {
          // console.log(name);
          return name;
        }
        // if (element.id === el) {
        //   console.log(element);
        //   // newEl = element.name;
        //   return element.name;
        // }
        // console.log(newEl);
        // return newEl;
      });
      // console.log(genre[0].name);
      g.push(genre[0].name);

      // console.log(el);
    });
    // console.log(g);
    return g;
  }, []);
  console.log(g);
}
f();
