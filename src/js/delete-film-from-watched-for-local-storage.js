import {refs} from './refs';
import singleCardTpl from '../templates/single-card.hbs';
import {createDataObjectByIdFromApiForLocalStorage} from './create-data-object-by-id-from-api-for-local-storage'

async function deleteFilmFromWatchedForLocalStorage(event) {
  // создает объект по id фильма
  const filmData = await createDataObjectByIdFromApiForLocalStorage(event.target.id);
  // сохраняет массив фильмов из localStorage 
  let arrayWatched = JSON.parse(localStorage.getItem('watched'));
  // создает массив уже без удаленного фильма
  const filteredArray = arrayWatched.filter(el => el.id !== filmData.id);
  // запись нового массива в localStorage
  localStorage.setItem('watched', JSON.stringify(filteredArray));
  // рендер обновленного списка
  const watchedFilms = localStorage.getItem('watched');
  const markup = singleCardTpl(JSON.parse(watchedFilms));
    refs.container.innerHTML = markup;
}

export {deleteFilmFromWatchedForLocalStorage}