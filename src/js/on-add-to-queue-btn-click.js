import { postDataToBackEndQueue } from './api-back-end';
import { getData } from './api';

const obj = {};
let arrayQueue = localStorage.getItem('queue') !== null ? JSON.parse(localStorage.getItem('queue')) : [];

// фун. додавання клікнутого фільму у локал сторедж
async function onAddToQueueBtnClick(event) {
  // event.preventDefault();
  // console.log("before record arrayQueue", arrayQueue); 
  // console.log("начало ф-и localStorage", localStorage.getItem('queue'));

    if (arrayQueue.includes(event.target.id)) {
      console.log('Такой фильм уже есть в списке');
      alert('Такой фильм уже есть в списке');
      return;
    }

  arrayQueue.push(event.target.id);

  //   отправка данных на бек
  await createDataObjectAndPostToBackEnd(event.target.id);

  // arrayQueue.push(event.target.id);
  // console.log("arrayQueue", arrayQueue);
  console.log('QUEUE - Фильм добавлен в список просмотренных фильмов');
  localStorage.setItem('queue', JSON.stringify(arrayQueue));
  // console.log("after record arrayQueue", arrayQueue); 
  // console.log("конец ф-ии localStorage", localStorage.getItem('queue')); 
  // return arrayQueue;
}

async function createDataObjectAndPostToBackEnd(id) {
  const respons = await (await getData(id)).data;
  obj.id = respons.id;
  obj.genres = [...respons.genres];
  obj.poster_path = respons.poster_path;
  obj.release_date = respons.release_date;
  obj.title = respons.title;
  obj.vote_average = respons.vote_average;
  obj.vote_count = respons.vote_count;
  console.log(obj);

  postDataToBackEndQueue(obj);
}

export { onAddToQueueBtnClick };
