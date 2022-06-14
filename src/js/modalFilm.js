import { getData, getTrailer } from './api';
import modalCard from '../templates/modalCard.hbs';
import { refs } from './refs';
import { closeModalFilm } from './openAndCloseModal';
import {addToWatched} from './addToWatched';
import {addToQueue} from './addToQueue'


// фун. создания и рендера модалки
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
    console.log(trailer.data.results[0].key);
    document
      .querySelector('.share')
      .setAttribute('href', `https://www.youtube.com/watch?v=${trailer.data.results[0].key}`);
    console.log();

  } catch (error) {
    console.log(error); 
  }
}

// слушатель модалки
refs.modal.addEventListener('click', closeModalFilm);

export { modalCardItem };
