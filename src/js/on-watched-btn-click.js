import { refs } from './refs';
import { getDataFromWatchedBackEnd } from './api-back-end';
import { getData } from './api';
import watchedCard from '../templates/wathed-card.hbs';

async function onWatchedBtnClick(e) {
  // блок для localStorage
    const watchedFilms = localStorage.getItem('watched');
    if (watchedFilms === null) {
      console.log('В списке WATCHED нет фильмов');
      alert('В списке WATCHED нет фильмов');
      return;
    }

  // блок для бэкэнда 
  // const res = await getDataFromWatchedBackEnd();
  // const dataRes = res.data;
  // refs.container.innerHTML = '';
  // dataRes.map(async e => {
  //   const markup = watchedCard(e);
  //   refs.container.insertAdjacentHTML('beforeend', markup);
  // });
}

export { onWatchedBtnClick };
