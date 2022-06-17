import { refs } from './refs';
import { getDataFromQueueBackEnd } from './api-back-end';
import { getData } from './api';
import watchedCard from '../templates/wathed-card.hbs';

async function onQueueBtnClick(e) {
  // console.log(refs.showQueueBtn);
  //   const queueFilms = localStorage.getItem('queue');
  //   if (queueFilms === null) {
  //     console.log('В списке QUEUE нет фильмов');
  //     alert('В списке QUEUE нет фильмов');
  //     return;
  //   }
  //   console.log('queueFilms', queueFilms);
  //   console.log('Список ожидаемых к просмотру');

  const res = await getDataFromQueueBackEnd();
  const dataRes = res.data;
  console.log(dataRes);
  refs.container.innerHTML = '';
  dataRes.map(async e => {
    const markup = watchedCard(e);
    refs.container.insertAdjacentHTML('beforeend', markup);
  });
}

export { onQueueBtnClick };
