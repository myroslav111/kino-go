import { getData, getTrailer } from './api';
import modalCard from '../templates/modal-film.hbs';
import { refs } from './refs';

import { closeModalFilm } from './open-and-close-modal';
import { addToWatched } from './add-to-watched';
import { addToQueue } from './add-to-queue';

import { onYouTubeIframeAPIReady, closeYouTube } from './youTube';

// фун. создания и рендера модалки
let path;
async function modalCardItem(id) {
  try {
    const res = await (await getData(id)).data;
    const markup = modalCard(res);
    const bgImage = res.backdrop_path;
    refs.modal.innerHTML = '';
    refs.modal.insertAdjacentHTML('afterbegin', markup);

    const addToWatchedBtn = document.querySelector('button[data-action="add-to-watched"]');
    const addToQueueBtn = document.querySelector('button[data-action="add-to-queue"]');
    addToWatchedBtn.addEventListener('click', addToWatched);
    addToQueueBtn.addEventListener('click', addToQueue);

    const bgc = document.querySelector('#bgc');

    bgc.style.background = `url(https://image.tmdb.org/t/p/w500${bgImage}) 70% 0%`;
    bgc.style.backgroundRepeat = 'no-repeat';
    bgc.style.backgroundSize = 'cover';

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
