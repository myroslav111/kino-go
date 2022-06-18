import { createDataObjectByIdFromAPI } from './createDataObjectByIdFromAPI'
import { getDataFromWatchedBackEnd, postDataToBackEndWatched } from './api-back-end';
import { getData } from './api';
import Notiflix from 'notiflix';

//  фун. додавання клікнутого фільму у локал сторедж
async function onAddToWatchedBtnClick(event) {
  // создание объекта данных фильма по id
  const filmData = await createDataObjectByIdFromAPI(event.target.id);
  
  // блок для localStorage
  // let arrayWatched = localStorage.getItem('watched') !== null ? JSON.parse(localStorage.getItem('watched')) : [];
  // // проверка на наличие текущего фильма в списке фильмов
  // let isInArray = arrayWatched.some(elem => elem.title === filmData.title)
  // if(isInArray){
  //   Notiflix.Notify.failure("Такой фильм уже есть в WATCHED.");
  //   return;
  // }
  // arrayWatched.push(filmData);
  // localStorage.setItem('watched', JSON.stringify(arrayWatched));


  // // блок для бэкэнда 
  // // получение с бэкэнда Watched списка фильмов 
  const res = await getDataFromWatchedBackEnd();
  const dataRes = res.data;
  // проверка на наличие фильма в списке
  const isInArray = dataRes.some(data => data.title === filmData.title)

  if(isInArray){     
    return;
  }
  postDataToBackEndWatched(filmData);
  Notiflix.Notify.success('Фильм добавлен в WATCHED.')
}

export { onAddToWatchedBtnClick };
