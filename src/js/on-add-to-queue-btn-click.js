import { createDataObjectByIdFromAPI } from './createDataObjectByIdFromAPI';
import { getDataFromQueueBackEnd, postDataToBackEndQueue } from './api-back-end';
import { getData } from './api';
import Notiflix from 'notiflix';

// фун. додавання клікнутого фільму у локал сторедж
async function onAddToQueueBtnClick(event) {
  // создание объекта данных фильма по id
  const filmData = await createDataObjectByIdFromAPI(event.target.id);

  // // блок для localStorage
  // let arrayQueue = localStorage.getItem('queue') !== null ? JSON.parse(localStorage.getItem('queue')) : [];
  // // проверка на наличие текущего фильма в списке фильмов
  // let isInArray = arrayQueue.some(elem => elem.title === filmData.title)
  // if(isInArray){
  //   Notiflix.Notify.info("Такой фильм уже есть в списке.");
  //   return;
  // }
  // arrayQueue.push(filmData);
  // localStorage.setItem('queue', JSON.stringify(arrayQueue));

  // // блок для бэкэнда
  // // получение с бэкэнда Queue списка фильмов
  const res = await getDataFromQueueBackEnd();
  const dataRes = res.data;
  // проверка на наличие фильма в списке
  const isInArray = dataRes.some(data => data.title === filmData.title);

  if (isInArray) {
    return;
  }
  postDataToBackEndQueue(filmData);
}

export { onAddToQueueBtnClick };
