import { refs } from './refs';
import { getDataFromQueueBackEnd } from './api-back-end';
import { getData } from './api';
import libraryCardFilmTpl from '../templates/library-card-film.hbs';
import singleCardTpl from '../templates/single-card.hbs';
import Notiflix from 'notiflix';

async function onQueueBtnClick(e) {
   // блок для localStorage

    // const queueFilms = localStorage.getItem('queue');
    // if (queueFilms === null) {
    //   Notiflix.Notify.failure('В QUEUE нет фильмов.');
    //   return;
    // }
    // // создание разметки по шаблону из распарсеного ответа из localStorage
    // const markup = singleCardTpl(JSON.parse(queueFilms));
    // refs.container.innerHTML = markup;

    
  // // блок для бэкэнда
  Notiflix.Loading.custom('Loading...', {
    customSvgCode:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">...</svg>',
  });

  // подсветка активной вкладки на my-library
  refs.showQueueBtn.setAttribute('data-action', 'open');

  if (refs.showWatchedBtn.classList.contains('color-orange')) {
    refs.showWatchedBtn.classList.remove('color-orange');
  }
  refs.showQueueBtn.classList.add('color-orange');

  // забор списка из бэкэнда и рендер
  const res = await getDataFromQueueBackEnd();
  const dataRes = res.data;
  // // проверка на наличие фильмов в списке
   if(res.data.length === 0){
    Notiflix.Notify.failure('В QUEUE нет фильмов.')
  };

  refs.container.innerHTML = '';
  dataRes.map(async e => {
    const markup = libraryCardFilmTpl(e);
    refs.container.insertAdjacentHTML('beforeend', markup);
  });
}

export { onQueueBtnClick };