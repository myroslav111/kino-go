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

// import { startingPage } from './js/startingPage';
import { onYouTubeIframeAPIReady } from './js/youTube';

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

//////////////////////
// мой вариант
// async function f() {
//   // *отримання усіх розпромісованих жанрів
//   const resG = await getDataGenre();

//   const resC = await getDataSingleCard();

//   // *отримання усіх розпромісованих карточок фільмів
//   const filmData = resC.data.results;
//   console.log('🚀 ~ filmData ', filmData);

//   // *перебирання усіх розпромісованих карточок фільмів
//   filmData.forEach(({ genre_ids }, index) => {
//     // *масив жанрів окремої карточки
//     const genresId = genre_ids;
//     filmData[index].ganreString = janres.id
//     // console.log(genresId);

//     // *створення пустого масиву
//     let g = [];

//     // *перебирання масив жанрів окремої карточки
//     genresId.map(el => {
//       const genre = resG.genres.filter(({ id, name }) => {
//         if (id === el) {
//           // console.log(name);
//           return name;
//         }
//       });

//       // *повертаємо масив з "id" та "name"
//       return g.push(genre[0].name);
//     });
//     // console.log(g.join(','));

//     // *доступ до "СПАНІВ"
//     const w = document.querySelectorAll('.genre-name');
//     w.forEach(el => (el.textContent = g.join(',')));
//     return g.join(',');
//   });
//   // console.log(x);

//   const options = {
//     janre: filmsJanre,
//     data: filmData,
//   };
//   // console.log('🚀 ~ options', options);
//   // markup += hbs(options)

//   return options;
// }
// f();

// export { f };

// вариант артема
// let q;
// getDataGenre()
//   .then(data => data)
//   .then(data => (q = data));
// // console.log(q.genres);
// getDataSingleCard()
//   .then(data => data.data.results)
//   .then(data => {
//     // console.log(data.data.results);

//     const films = data;

//     films.forEach(({ genre_ids }, index) => {
//       // console.log(genre_ids);
//       // console.log(q.genres);

//       const r = q.genres
//         .filter(el => {
//           return genre_ids.includes(el.id);
//         })
//         .map(({ name }) => {
//           return name;
//         });
//       // console.log();
//       films[index].janreStr = r.join(',');
//     });
//     return films;
//   });
