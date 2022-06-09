import { getData } from './api';
import modalCard from '../templates/modalCard.hbs';
import { refs } from './refs';
import { closeModalFilm } from './openAndCloseModal';

// фун. создания и рендера модалки
async function modalCardItem(id) {
  try {
    const res = await (await getData(id)).data;
    const markup = modalCard(res);
    const bgImage = res.backdrop_path;
    refs.modal.innerHTML = '';
    refs.modal.insertAdjacentHTML('afterbegin', markup);
    const bgc = document.querySelector('#bgc');

    bgc.style.background = `url(https://image.tmdb.org/t/p/w500${bgImage}) 70% 0%`;
    bgc.style.backgroundRepeat = 'no-repeat';
    bgc.style.backgroundSize = 'cover';
  } catch (error) {
    console.log(error);
  }
}

// слушатель модалки
refs.modal.addEventListener('click', closeModalFilm);

export { modalCardItem };
