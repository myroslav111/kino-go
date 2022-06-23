import {refs} from './refs';
import singleCardTpl from '../templates/single-card.hbs';
import { createDataObjectByIdFromApiForLocalStorage } from './create-data-object-by-id-from-api-for-local-storage';
import { onWatchedBtnClickForLocalStorage } from './on-watched-btn-click-for-local-storage';
import Notiflix from 'notiflix';

// удаляет фильм из localStorage Watched и обновляет список с помощью onWatchedBtnClickForLocalStorage
async function deleteFilmFromWatchedForLocalStorage(event) {
  // создает объект по id фильма
  const filmData = await createDataObjectByIdFromApiForLocalStorage(event.target.id);
  // сохраняет массив фильмов из localStorage 
  let arrayWatched = JSON.parse(localStorage.getItem('watched'));
  // создает массив уже без удаленного фильма
  const filteredArray = arrayWatched.filter(el => el.id !== filmData.id);
  // запись нового массива в localStorage
  localStorage.setItem('watched', JSON.stringify(filteredArray));

  Notiflix.Notify.info('Фильм удален из WATCHED.');
  // рендер обновленного списка
  await onWatchedBtnClickForLocalStorage();
  refs.modal.classList.add('is-hidden');
}

export {deleteFilmFromWatchedForLocalStorage}