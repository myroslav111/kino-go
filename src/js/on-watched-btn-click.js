import { refs } from './refs';
import { getDataFromWatchedBackEnd } from './api-back-end';
import { getData } from './api';
import libraryCardFilmTpl from '../templates/library-card-film.hbs';
import singleCardTpl from '../templates/single-card.hbs';
import Notiflix from 'notiflix';

async function onWatchedBtnClick(e) {
  // блок для localStorage

  // const watchedFilms = localStorage.getItem('watched');
  // if (watchedFilms === null) {
  //   Notiflix.Notify.info('В списке WATCHED нет фильмов.');
  //   return;
  // }
  // // создание разметки по шаблону из распарсеного ответа из localStorage
  // const markup = singleCardTpl(JSON.parse(watchedFilms));
  // refs.container.innerHTML = markup;

  Notiflix.Loading.custom('Loading...', {
    customSvgCode:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">...</svg>',
  });

  refs.showWatchedBtn.setAttribute('data-action', 'open');

  if (refs.showQueueBtn.classList.contains('color-orange')) {
    refs.showQueueBtn.classList.remove('color-orange');
  }
  refs.showWatchedBtn.classList.add('color-orange');
  // refs.showWatchedBtn.classList.add('color-orange');

  // блок для бэкэнда
  const res = await getDataFromWatchedBackEnd();

  const dataRes = res.data;

  // console.log('dataRes', dataRes);

  refs.container.innerHTML = '';
  dataRes.map(async e => {
    const markup = libraryCardFilmTpl(e);
    refs.container.insertAdjacentHTML('beforeend', markup);
  });
}

export { onWatchedBtnClick };
