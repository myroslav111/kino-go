import { createDataObjectByIdFromAPI } from './create-data-object-by-id-from-api';
import { getDataFromWatchedBackEnd, postDataToBackEndWatched } from './api-back-end';
import { getData } from './api';
import Notiflix from 'notiflix';

// фун. додавання клікнутого фільму в back-end Watched
async function onAddToWatchedBtnClick(event) {
  // // создание объекта данных фильма по id
  const filmData = await createDataObjectByIdFromAPI(event.target.id);

  // // получение с бэкэнда Watched списка фильмов
  const res = await getDataFromWatchedBackEnd();
  const dataRes = res.data;

  // проверка на наличие фильма в списке
  const isInArray = dataRes.some(data => data.title === filmData.title);

  if(isInArray){   
    Notiflix.Notify.failure("Такой фильм уже есть в WATCHED.");  
    return;
  }
  postDataToBackEndWatched(filmData);
  Notiflix.Notify.success('Фильм добавлен в WATCHED.')
}

export { onAddToWatchedBtnClick };
