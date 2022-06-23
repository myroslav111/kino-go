import { refs } from './refs';
import { getDataFromQueueBackEnd } from './api-back-end';
import { getData } from './api';
import libraryCardFilmTpl from '../templates/library-card-film.hbs';
import singleCardTpl from '../templates/single-card.hbs';
import Notiflix from 'notiflix';

// отображение списка фильмов Queue из back-end
async function onQueueBtnClick(e) {
  Notiflix.Loading.custom('Loading...', {
    customSvgCode:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">...</svg>',
  });

  // подсветка активной вкладки на my-library при нажатии на кнопку QUEUE
  refs.showQueueBtn.setAttribute('data-action', 'open');

  if (refs.showWatchedBtn.classList.contains('color-orange')) {
    refs.showWatchedBtn.classList.remove('color-orange');
  }
  refs.showQueueBtn.classList.add('color-orange');

  // забор списка из бэкэнда и рендер
  const res = await getDataFromQueueBackEnd();
  const dataRes = res.data;
  // // проверка на наличие фильмов в списке
   if(res.data.length === 0){
    Notiflix.Notify.failure('В QUEUE нет фильмов.')
  };

  refs.container.innerHTML = '';
  dataRes.map(async e => {
    const markup = libraryCardFilmTpl(e);
    refs.container.insertAdjacentHTML('beforeend', markup);
  });
}

export { onQueueBtnClick };