import { createDataObjectByIdFromAPI } from './create-data-object-by-id-from-api';
import { getDataFromQueueBackEnd, postDataToBackEndQueue } from './api-back-end';
import { getData } from './api';
import Notiflix from 'notiflix';

// фун. додавання клікнутого фільму в back-end Queue
async function onAddToQueueBtnClick(event) {
  // // создание объекта данных фильма по id
  const filmData = await createDataObjectByIdFromAPI(event.target.id);

  // // получение с бэкэнда Queue списка фильмов
  const res = await getDataFromQueueBackEnd();
  const dataRes = res.data;
  // проверка на наличие фильма в списке
  const isInArray = dataRes.some(data => data.title === filmData.title);

  if(isInArray){ 
    Notiflix.Notify.failure("Такой фильм уже есть в QUEUE.")    
    return;
  }
  postDataToBackEndQueue(filmData);
  Notiflix.Notify.success('Фильм добавлен в QUEUE.')
}

export { onAddToQueueBtnClick };
