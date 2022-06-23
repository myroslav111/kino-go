import {refs} from './refs';
import singleCardTpl from '../templates/single-card.hbs';
import {createDataObjectByIdFromApiForLocalStorage} from './create-data-object-by-id-from-api-for-local-storage'
import { onQueueBtnClickForLocalStorage } from './on-queue-btn-click-for-local-storage';
import Notiflix from 'notiflix';

// удаляет фильм из localStorage Queue и обновляет список с помощью onQueueBtnClickForLocalStorage
async function deleteFilmFromQueueForLocalStorage(event) {
  // создает объект по id фильма
  const filmData = await createDataObjectByIdFromApiForLocalStorage(event.target.id);
  // сохраняет массив фильмов из localStorage 
  let arrayQueue = JSON.parse(localStorage.getItem('queue'));
  // создает массив уже без удаленного фильма
  const filteredArray = arrayQueue.filter(el => el.id !== filmData.id);
  // запись нового массива в localStorage
  localStorage.setItem('queue', JSON.stringify(filteredArray));

  Notiflix.Notify.info('Фильм удален из QUEUE.');
  // рендер обновленного списка
  await onQueueBtnClickForLocalStorage();
  refs.modal.classList.add('is-hidden');
}

export {deleteFilmFromQueueForLocalStorage}