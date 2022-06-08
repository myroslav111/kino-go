import { getData } from './api';
import modalCard from '../templates/modalCard.hbs';
import { refs } from './refs';

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
    refs.modal.addEventListener('click', e => {
      console.log(e.target);
      if (e.target.nodeName === 'SECTION' || e.target.nodeName === 'BUTTON') {
        refs.modal.classList.add('is-hidden');
      }
      return;
    });
  } catch (error) {
    console.log(error);
  }
}

export { modalCardItem };
