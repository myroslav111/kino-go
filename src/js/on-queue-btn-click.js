import { refs } from './refs';
import { getDataFromQueueBackEnd } from './api-back-end';
import { getData } from './api';
import watchedCard from '../templates/wathed-card.hbs';

async function onQueueBtnClick(e) {
  // блок для localStorage
    // const queueFilms = localStorage.getItem('queue');

    // if (queueFilms === null) {
    //   console.log('В списке QUEUE нет фильмов');
    //   alert('В списке QUEUE нет фильмов');
    //   return;
    // }

  // блок для бэкэнда 
  const res = await getDataFromQueueBackEnd();
  const dataRes = res.data;
  console.log("dataRes", dataRes);
  refs.container.innerHTML = '';
  dataRes.map(async e => {
    const markup = watchedCard(e);
    refs.container.insertAdjacentHTML('beforeend', markup);
  });
}

export { onQueueBtnClick };
