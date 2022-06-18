import { getData, getTrailer } from './api';
import modalFilmTpl from '../templates/modal-film.hbs';
import { refs } from './refs';

import { closeModalFilm } from './open-and-close-modal';
import { onAddToWatchedBtnClick } from './on-add-to-watched-btn-click';
import { onAddToQueueBtnClick } from './on-add-to-queue-btn-click';

import { onYouTubeIframeAPIReady, closeYouTube } from './youTube';

// фун. создания и рендера модалки
let path;

async function modalCardItem(id) {
  try {
    const res = await (await getData(id)).data;
    const markup = modalFilmTpl(res);
    const bgImage = res.backdrop_path;
    refs.modal.innerHTML = '';
    refs.modal.insertAdjacentHTML('afterbegin', markup);

    // рефи на кнопки модалки по додаванню данніх в локал сторедж
    const addToWatchedBtn = document.querySelector('button[data-action="add-to-watched"]');
    const addToQueueBtn = document.querySelector('button[data-action="add-to-queue"]');
    addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick);
    addToQueueBtn.addEventListener('click', onAddToQueueBtnClick);
    console.log('id', id);

    // console.log(arrayWatched);
    // Watched
    console.log(refs.showWatchedBtn.dataset.action === 'open');
    if (
      refs.showWatchedBtn.dataset.action === 'open' ||
      refs.showQueueBtn.dataset.action === 'open'
    ) {
      // list-btn-modal
      document.querySelector('.list-btn-modal').classList.add('is-hidden');
      document.querySelector('.raise').classList.remove('is-hidden');
      // document.querySelector('.movie_social');
    }

    // бекграунд колор карточки модалки
    const bgc = document.querySelector('#bgc');

    bgc.style.background = `url(https://image.tmdb.org/t/p/w500${bgImage}) 70% 0%`;
    bgc.style.backgroundRepeat = 'no-repeat';
    bgc.style.backgroundSize = 'cover';

    // запрос на трейлер фільму
    const trailer = await getTrailer(id);

    // id путь к трейлеру ютюб
    path = trailer.data.results[0].key;
    const refIconYouTobe = document.querySelector('.svg--icon');

    // слушаем кнопку открытия ютюба
    refIconYouTobe.addEventListener('click', openYouTobePlaer);
    const refBtnCloseYouTubePlaer = document.querySelector('.youtubeg');

    // слушаем кнопку закрытия ютюба
    refBtnCloseYouTubePlaer.addEventListener('click', closeYouTube);
  } catch (error) {
    console.log(error);
  }
}

// слушатель иконка ютюб
function openYouTobePlaer() {
  onYouTubeIframeAPIReady(path);
}

// слушатель модалки
refs.modal.addEventListener('click', closeModalFilm);

export { modalCardItem };
