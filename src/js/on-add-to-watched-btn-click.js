import { createDataObjectByIdFromAPI } from './createDataObjectByIdFromAPI'
import { getDataFromWatchedBackEnd, postDataToBackEndWatched } from './api-back-end';
import { getData } from './api';

//  фун. додавання клікнутого фільму у локал сторедж
async function onAddToWatchedBtnClick(event) {
  // блок для localStorage
  // let arrayWatched = localStorage.getItem('watched') !== null ? JSON.parse(localStorage.getItem('watched')) : [];
  // // создание объекта данных фильма по id
  // const filmData = await createDataObjectByIdFromAPI(event.target.id);
  // // проверка на наличие текущего фильма в списке фильмов
  // let isInArray = arrayWatched.some(elem => elem.title === filmData.title)
  // if(isInArray){
  //   console.log("Такой фильм уже есть в списке");
  //   alert("Такой фильм уже есть в списке");
  //   return;
  // }
  // arrayWatched.push(filmData);
  // localStorage.setItem('watched', JSON.stringify(arrayWatched));


  // блок для бэкэнда - отправка данных на бек
  await createDataObjectAndPostToBackEnd(event.target.id);
}

async function createDataObjectAndPostToBackEnd(id) {
  const obj = {};
  // получение фильма по id с API и создание объекта
  const respons = await (await getData(id)).data;
  obj.id = respons.id;
  obj.genres = [...respons.genres];
  obj.poster_path = respons.poster_path;
  obj.release_date = respons.release_date;
  obj.title = respons.title;
  obj.vote_average = respons.vote_average;
  obj.vote_count = respons.vote_count;
  
  //получение с бэкэнда Watched списка фильмов 
  const res = await getDataFromWatchedBackEnd();
  const dataRes = res.data;
  // проверка на наличие фильма в списке
  const isInArray = dataRes.some(data => data.title === obj.title)

  if(isInArray){     
    return;
  }

  postDataToBackEndWatched(obj);
}

export { onAddToWatchedBtnClick };
