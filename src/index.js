import './sass/main.scss';
import { getData, getDataSingleCard, getDataGenre, getDataByInput } from './js/api';
// import { refs } from './js/refs';
import { modalCardItem } from './js/modalFilm';
import { singleCardItem } from './js/searchItemList';

singleCardItem();
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
