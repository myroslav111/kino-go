import { getData } from './api';
import modalCard from '../templates/modalCard.hbs';
import { refs } from './refs';

async function modalCardItem() {
  try {
    const res = await (await getData()).data;
    const dataCinema = res.results;
    const markup = modalCard(dataCinema[0]);
    const bgImage = dataCinema[0].backdrop_path;
    refs.modal.insertAdjacentHTML('afterbegin', markup);
    const bgc = document.querySelector('#bgc');

    bgc.style.background = `url(https://image.tmdb.org/t/p/w500${bgImage})`;
    bgc.style.backgroundRepeat = 'no-repeat';
    bgc.style.backgroundSize = 'cover';
  } catch (error) {
    console.log(error);
  }
}

export { modalCardItem };
