import { refs } from './refs';
import { putDataBackEnd, getDataBackEnd } from './api-back-end';
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
  const dataRes = res.data.watched;
  console.log(dataRes);
  dataRes.map(async e => {
    const res = await getData(e);
    console.log(res.data);
    const markap = watchedCard(res.data);
    console.log(markap);
    refs.container.insertAdjacentHTML('beforeend', markap);
  });
}

export { onWatchedBtnClick };
// console.log(data.data);
// refs.container.insertAdjacentHTML('beforeend', singleCard(data.data));
