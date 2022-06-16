import { postDataBackEndForQueue, getDataBackEnd } from './api-back-end';
import { getData } from './api';

const obj = {};
let arrayQueue = [];

// фун. додавання клікнутого фільму у локал сторедж
async function onAddToQueueBtnClick(event) {
  // event.preventDefault();
  //   if (arrayQueue.includes(event.target.id)) {
  //     console.log('Такой фильм уже есть в списке');
  //     alert('Такой фильм уже есть в списке');
  //     return;
  //   }
  //   отправка данных на бек
  await postDataToBackEndQueue(event.target.id);

  arrayQueue.push(event.target.id);
  // console.log("arrayQueue", arrayQueue);
  console.log('QUEUE - Фильм добавлен в список просмотренных фильмов');
  localStorage.setItem('queue', JSON.stringify(arrayQueue));
  // return arrayQueue;
}

async function postDataToBackEndQueue(id) {
  const respons = await (await getData(id)).data;
  obj.id = respons.id;
  obj.genres = [...respons.genres];
  obj.poster_path = respons.poster_path;
  obj.release_date = respons.release_date;
  obj.title = respons.title;
  obj.vote_average = respons.vote_average;
  obj.vote_count = respons.vote_count;
  console.log(obj);

  postDataBackEndForQueue(obj);
}

export { onAddToQueueBtnClick };
