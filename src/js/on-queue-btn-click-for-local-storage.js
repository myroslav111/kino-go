import { refs } from './refs';
import singleCardTpl from '../templates/single-card.hbs';
import Notiflix from 'notiflix';

function onQueueBtnClickForLocalStorage(event) {
    const queueFilms = localStorage.getItem('queue');
    if (queueFilms === null) {
      Notiflix.Notify.failure('В QUEUE нет фильмов.');
      return;
  }
  
  // подсветка активной вкладки на my-library при нажатии на кнопку QUEUE
  refs.showQueueBtn.setAttribute('data-action', 'open');

  if (refs.showWatchedBtn.classList.contains('color-orange')) {
    refs.showWatchedBtn.classList.remove('color-orange');
  }
  refs.showQueueBtn.classList.add('color-orange');

    // создание разметки по шаблону из распарсеного ответа 
    const markup = singleCardTpl(JSON.parse(queueFilms));
    refs.container.innerHTML = markup;
}
export { onQueueBtnClickForLocalStorage };