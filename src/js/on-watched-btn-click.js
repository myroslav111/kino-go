import { refs } from './refs';
import { getDataFromWatchedBackEnd } from './api-back-end';
import { getData } from './api';
import watchedCard from '../templates/wathed-card.hbs';
import singleCard from '../templates/single-card.hbs';
import Notiflix from 'notiflix';


async function onWatchedBtnClick(e) {
  // // блок для localStorage
  //   const watchedFilms = localStorage.getItem('watched');
  //   if (watchedFilms === null) {
  //     Notiflix.Notify.info('В списке WATCHED нет фильмов.');
  //     return;
  //   }
  //   // создание разметки по шаблону из распарсеного ответа из localStorage
  //   const markup = singleCard(JSON.parse(watchedFilms));
  //   refs.container.innerHTML = markup;


  // // блок для бэкэнда 
  const res = await getDataFromWatchedBackEnd();
  const dataRes = res.data;
  refs.container.innerHTML = '';
  dataRes.map(async e => {
    const markup = watchedCard(e);
    refs.container.insertAdjacentHTML('beforeend', markup);
  });
}

export { onWatchedBtnClick };
