import './sass/main.scss';
// import { getData, getDataSingleCard, getDataGenre, getDataByInput } from './js/api';
// import { refs } from './js/refs';
// import { modalCardItem } from './js/modalFilm';
import { singleCardItem } from './js/searchItemList';
import { onFormSubmit } from './js/searchByName';
import { onStudentsClick, onModalPressEsc, closeModal } from './js/modalTeam';
// import { startingPage } from './js/startingPage';

function startingPage() {
  console.log(document.querySelector('.video'));
  document.querySelector('.video').classList.remove('hidden');
  console.log('1');
  setTimeout(() => {
    try {
      console.log('2');
      singleCardItem();
      console.log(document.querySelector('.video'));
    } catch (error) {
      console.log('er');
      console.log(error);
    } finally {
      document.querySelector('.video').classList.add('hidden');
      console.log('3');
    }
  }, 7000);
  console.log('4');
}

startingPage();

// singleCardItem();

// getDataByInput('рембо');
// getDataGenre();

// задача
// вернуть от q, id которого равен r.genres_ids, его name
// response1[response2.ids].name

// async function x(a, b) {
//   const r = await a;
//   const q = await b;

//   console.log(r);
//   console.log(q);

// }
// x(getDataGenre(), getDataSingleCard());
