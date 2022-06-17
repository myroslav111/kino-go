import { createDataObjectByIdFromAPI } from './createDataObjectByIdFromAPI'
import { getDataFromQueueBackEnd, postDataToBackEndQueue } from './api-back-end';
import { getData } from './api';

// для бэкэнда
// const obj = {};

// фун. додавання клікнутого фільму у локал сторедж
async function onAddToQueueBtnClick(event) {
  // блок для localStorage
  let arrayQueue = localStorage.getItem('queue') !== null ? JSON.parse(localStorage.getItem('queue')) : [];  
  // создание объекта данных фильма по id
  const filmData = await createDataObjectByIdFromAPI(event.target.id);
  // проверка на наличие текущего фильма в списке фильмов
  let isInArray = arrayQueue.some(elem => elem.title === filmData.title)
  if(isInArray){
    console.log("Такой фильм уже есть в списке");
    alert("Такой фильм уже есть в списке");
    return;
  }
  arrayQueue.push(filmData);
  localStorage.setItem('queue', JSON.stringify(arrayQueue));

  // блок для бэкэнда - отправка данных на бек
  // await createDataObjectAndPostToBackEnd(event.target.id);
}

// async function createDataObjectAndPostToBackEnd(id) {
//   // получение фильма по id с API и создание объекта
//   const respons = await (await getData(id)).data;
//   obj.id = respons.id;
//   obj.genres = [...respons.genres];
//   obj.poster_path = respons.poster_path;
//   obj.release_date = respons.release_date;
//   obj.title = respons.title;
//   obj.vote_average = respons.vote_average;
//   obj.vote_count = respons.vote_count;
  
//     //получение с бэкэнда Queue списка фильмов
//     const res = await getDataFromQueueBackEnd();
//     const dataRes = res.data;
//     // проверка на наличие фильма в списке
//     const isInArray = dataRes.some(data => data.title === obj.title)

//     if(isInArray){     
//       return;
//     }

//   postDataToBackEndQueue(obj);
// }

export { onAddToQueueBtnClick };
