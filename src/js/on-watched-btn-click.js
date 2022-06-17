import { refs } from './refs';
import { getDataFromWatchedBackEnd } from './api-back-end';
import { getData } from './api';
import watchedCard from '../templates/wathed-card.hbs';

async function onWatchedBtnClick(e) {
  //    console.log(refs.showWatchedBtn);
  //   const watchedFilms = localStorage.getItem('watched');
  //   if (watchedFilms === null) {
  //     console.log('В списке WATCHED нет фильмов');
  //     alert('В списке WATCHED нет фильмов');
  //     return;
  //   }
  //   console.log('watchedFilms', watchedFilms);
  //   console.log('Список просмотренных');
  //   const markup = JSON.parse(watchedFilms)
  //   console.log('markup', markup);

  const res = await getDataFromWatchedBackEnd();
  const dataRes = res.data;
  console.log(dataRes);
  refs.container.innerHTML = '';
  dataRes.map(async e => {
    const markup = watchedCard(e);
    refs.container.insertAdjacentHTML('beforeend', markup);
  });
}

export { onWatchedBtnClick };
