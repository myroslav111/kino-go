import { refs } from './refs';
import { postDataBackEnd, getDataBackEnd } from './api-back-end';
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
  const res = await getDataBackEnd();
  const dataRes = res.data;
  console.log(dataRes);
  refs.container.innerHTML = '';
  dataRes.map(async e => {
    const markap = watchedCard(e);
    refs.container.insertAdjacentHTML('beforeend', markap);
  });
}

export { onWatchedBtnClick };
