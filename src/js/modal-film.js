import { getData, getTrailer } from './api';
import modalFilmTpl from '../templates/modal-film.hbs';
import { refs } from './refs';
import { deleteFilm } from './delete-film-from-back';
import { onAddToQueueBtnClickForLocalStorage } from './on-add-to-queue-btn-click-for-local-storage';
import { onAddToWatchedBtnClickForLocalStorage } from './on-add-to-watched-btn-click-for-local-storage';
import { deleteFilmFromQueueForLocalStorage } from './delete-film-from-queue-for-local-storage';
import { deleteFilmFromWatchedForLocalStorage} from './delete-film-from-watched-for-local-storage';
import { closeModalFilm } from './open-and-close-modal';
import { onAddToWatchedBtnClick } from './on-add-to-watched-btn-click';
import { onAddToQueueBtnClick } from './on-add-to-queue-btn-click';
import Notiflix from 'notiflix';
import { onYouTubeIframeAPIReady, closeYouTube } from './youTube';

let path;

// фун. создания и рендера модалки
async function modalCardItem(id) {
  try {
    const res = await (await getData(id)).data;
    const markup = modalFilmTpl(res);
    const bgImage = res.backdrop_path;
    refs.modal.innerHTML = '';
    refs.modal.insertAdjacentHTML('afterbegin', markup);

    // рефи на кнопки модалки по додаванню даних в список Watched або Queue
    const addToWatchedBtn = document.querySelector('button[data-action="add-to-watched"]');
    const addToQueueBtn = document.querySelector('button[data-action="add-to-queue"]');
    

    // // // для localStorage раскомментировать
    // addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClickForLocalStorage);
    // addToQueueBtn.addEventListener('click', onAddToQueueBtnClickForLocalStorage);
    // console.log("Сейчас у нас работает localStorage");

    
    // для бэкэнда раскомментировать
    addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick);
    addToQueueBtn.addEventListener('click', onAddToQueueBtnClick);
    console.log("Сейчас у нас работает back-end");


    // подсветка бекграунда кнопки текущей вкладки
    try {
      // если открыта вкладка my-library....
      if (
        refs.library.classList.contains('current')
        // refs.showWatchedBtn.dataset.action === 'open' ||
        // refs.showQueueBtn.dataset.action === 'open'
      ) {
        // делаем кнопки добавления фильма скрытыми
        document.querySelector('.list-btn-modal').classList.add('is-hidden');
        // делаем кнопку удаления фильма видимой
        document.querySelector('.raise').classList.remove('is-hidden');


        // // // для localStorage раскомментировать
        // if(refs.showQueueBtn.classList.contains('color-orange')){
        //   document.querySelector('.raise').addEventListener('click', deleteFilmFromQueueForLocalStorage);
        // }
        // if(refs.showWatchedBtn.classList.contains('color-orange')){
        //   document.querySelector('.raise').addEventListener('click', deleteFilmFromWatchedForLocalStorage);
        // }
        // console.log("Сейчас у нас работает localStorage");


        // // для бэкэнда раскомментировать 
        document.querySelector('.raise').addEventListener('click', deleteFilm);
        console.log("Сейчас у нас работает back-end");


      }
    } catch (error) {
      // console.log();
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

    // добавляем слушателя на кнопку открытия ютюба
    refIconYouTobe.addEventListener('click', openYouTobePlaer);
    const refBtnCloseYouTubePlaer = document.querySelector('.youtubeg');

    // добавляем слушателя на кнопку закрытия ютюба
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
