import { refs } from './refs';
import { getDataFromWatchedBackEnd } from './api-back-end';
import { getData } from './api';
import libraryCardFilmTpl from '../templates/library-card-film.hbs';
import singleCardTpl from '../templates/single-card.hbs';
import Notiflix from 'notiflix';

// отображение списка фильмов Watched из back-end
async function onWatchedBtnClick(e) {
  Notiflix.Loading.custom('Loading...', {
    customSvgCode:
      '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">...</svg>',
  });

  // автоматическая подсветка активной вкладки при переходе на my-library 
  refs.showWatchedBtn.setAttribute('data-action', 'open');

  if (refs.showQueueBtn.classList.contains('color-orange')) {
    refs.showQueueBtn.classList.remove('color-orange');
  }
  refs.showWatchedBtn.classList.add('color-orange');

  // забор списка из бэкэнда и рендер
  const res = await getDataFromWatchedBackEnd(); 
  const dataRes = res.data;
  // проверка на наличие фильмов в списке
  if(dataRes.length === 0){
    Notiflix.Notify.failure('В WATCHED нет фильмов.')
  };

  refs.container.innerHTML = '';
  dataRes.map(async e => {
    const markup = libraryCardFilmTpl(e);
    refs.container.insertAdjacentHTML('beforeend', markup);
  });
}

export { onWatchedBtnClick };