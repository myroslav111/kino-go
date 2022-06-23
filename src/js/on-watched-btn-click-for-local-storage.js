import { refs } from './refs';
import singleCardTpl from '../templates/single-card.hbs'
import Notiflix from 'notiflix';

// отображение списка фильмов Watched из localStorage
async function onWatchedBtnClickForLocalStorage(e) {
  // автоматическая подсветка активной вкладки при переходе на my-library 
  refs.showWatchedBtn.setAttribute('data-action', 'open');

  if (refs.showQueueBtn.classList.contains('color-orange')) {
    refs.showQueueBtn.classList.remove('color-orange');
  }
  refs.showWatchedBtn.classList.add('color-orange');

  const watchedFilms = localStorage.getItem('watched');
    if (watchedFilms === null || watchedFilms === "[]") {
      Notiflix.Notify.failure('В WATCHED нет фильмов.');
  }  

    // создание разметки по шаблону из распарсеного ответа
    const markup = singleCardTpl(JSON.parse(watchedFilms));
    refs.container.innerHTML = markup;
}

export { onWatchedBtnClickForLocalStorage };