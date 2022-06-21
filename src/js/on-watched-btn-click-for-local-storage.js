import { refs } from './refs';
import singleCardTpl from '../templates/single-card.hbs'
import Notiflix from 'notiflix';

async function onWatchedBtnClickForLocalStorage(e) {
  const watchedFilms = localStorage.getItem('watched');
    if (watchedFilms === null) {
      Notiflix.Notify.failure('В WATCHED нет фильмов.');
      return;
  }
  
  // автоматическая подсветка активной вкладки при переходе на my-library 
  refs.showWatchedBtn.setAttribute('data-action', 'open');

  if (refs.showQueueBtn.classList.contains('color-orange')) {
    refs.showQueueBtn.classList.remove('color-orange');
  }
  refs.showWatchedBtn.classList.add('color-orange');

    // создание разметки по шаблону из распарсеного ответа
    const markup = singleCardTpl(JSON.parse(watchedFilms));
    refs.container.innerHTML = markup;
}
export { onWatchedBtnClickForLocalStorage };