import { getDataSingleCard, getDataGenre } from './api';
import singleCard from '../templates/singleCard.hbs';
import { refs } from './refs';
import { observeOnLastElOfGallery } from './infinit-scr';
import { modalCardItem } from './modal';
let num = 0;

async function singleCardItem() {
  num += 1;
  try {
    const res = await (await getDataSingleCard(num)).data;
    const dataCinema = res.results;
    const markup = singleCard(dataCinema);
    refs.container.insertAdjacentHTML('beforeend', markup);
    observeOnLastElOfGallery(document.querySelectorAll('.movie-card'));
    refs.container.addEventListener('click', e => {
      console.log(e.target.id);
      if (e.target.nodeName !== 'IMG') {
        return;
      }
      modalCardItem(e.target.id);
      refs.modal.classList.remove('is-hidden');
    });
  } catch (error) {
    console.log(error);
  }
}

export { singleCardItem };
