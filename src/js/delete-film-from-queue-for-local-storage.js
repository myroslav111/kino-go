import {createDataObjectByIdFromApiForLocalStorage} from './create-data-object-by-id-from-api-for-local-storage'

async function deleteFilmFromQueueForLocalStorage(event) {
  // создает объект по id фильма
  const filmData = await createDataObjectByIdFromApiForLocalStorage(event.target.id);
  // сохраняет массив фильмов из localStorage 
  let arrayQueue = JSON.parse(localStorage.getItem('queue'));
  // создает массив уже без удаленного фильма
  const filteredArray = arrayQueue.filter(el => el.id !== filmData.id);
  // запись нового массива в localStorage
  localStorage.setItem('queue', JSON.stringify(filteredArray));
  // рендер обновленного списка
  const queueFilms = localStorage.getItem('queue');
  const markup = singleCardTpl(JSON.parse(queueFilms));
    refs.container.innerHTML = markup;
}

export {deleteFilmFromQueueForLocalStorage}