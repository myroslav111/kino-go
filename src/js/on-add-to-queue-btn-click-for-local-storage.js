import { createDataObjectByIdFromApiForLocalStorage } from "./create-data-object-by-id-from-api-for-local-storage";
import Notiflix from 'notiflix';

// добавляет выбранный фильм в localStorage
async function onAddToQueueBtnClickForLocalStorage(event) {
    // создание объекта данных фильма по id
  const filmData = await createDataObjectByIdFromApiForLocalStorage(event.target.id);
  let arrayQueue = localStorage.getItem('queue') !== null ? JSON.parse(localStorage.getItem('queue')) : [];
  // проверка на наличие текущего фильма в списке фильмов
  let isInArray = arrayQueue.some(elem => elem.title === filmData.title)
  if(isInArray){
    Notiflix.Notify.failure("Такой фильм уже есть в QUEUE.");
    return;
  }
  arrayQueue.push(filmData);
  localStorage.setItem('queue', JSON.stringify(arrayQueue));
  Notiflix.Notify.success('Фильм добавлен в QUEUE.')

}

export { onAddToQueueBtnClickForLocalStorage };