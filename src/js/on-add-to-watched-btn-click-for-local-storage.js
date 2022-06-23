import { createDataObjectByIdFromApiForLocalStorage } from './create-data-object-by-id-from-api-for-local-storage';
import Notiflix from 'notiflix';

// добавляет выбранный фильм в localStorage
async function onAddToWatchedBtnClickForLocalStorage(event) {
    // создание объекта данных фильма по id
  const filmData = await createDataObjectByIdFromApiForLocalStorage(event.target.id);
  let arrayWatched = localStorage.getItem('watched') !== null ? JSON.parse(localStorage.getItem('watched')) : [];
  // проверка на наличие текущего фильма в списке фильмов
  let isInArray = arrayWatched.some(elem => elem.title === filmData.title)
  if(isInArray){
    Notiflix.Notify.failure("Такой фильм уже есть в WATCHED.");
    return;
  }
  arrayWatched.push(filmData);
  localStorage.setItem('watched', JSON.stringify(arrayWatched));
  Notiflix.Notify.success('Фильм добавлен в WATCHED.');
}

export {onAddToWatchedBtnClickForLocalStorage}