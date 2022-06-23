import {
  getDataFromWatchedBackEnd,
  deleteDataFromBackEndWatched,
  getDataFromQueueBackEnd,
  deleteDataFromBackEndQueue,
} from './api-back-end';
import { refs } from './refs';
import { getData } from './api';
import { onWatchedBtnClick } from './on-watched-btn-click';
import { onQueueBtnClick } from './on-queue-btn-click';
import Notiflix from 'notiflix';

// удаление фильма из back-end
async function deleteFilm(e) {
  try {
    const res = await (await getData(e.target.id)).data;
    let idForDel;
    // проверка на какой вкладке находится пользователь чтоб понимать откуда удалять фильм
    if (refs.showWatchedBtn.classList.contains('color-orange')) {
      const responseWatched = await getDataFromWatchedBackEnd();
      const dataResWatched = responseWatched.data;
      // находим айди фильма в нашем беке для удаления
      dataResWatched.map(el => {
        if (el.id === Number(res.id)) {
          idForDel = Number(el.ids);
        }
      });
      // удаляем фильм на бекенде из Watched
      await deleteDataFromBackEndWatched(idForDel);
      Notiflix.Notify.info('Фильм удален из WATCHED.');
      return;
    } else {
      const responseQueue = await getDataFromQueueBackEnd();
      const dataResQueue = responseQueue.data;
      dataResQueue.map(el => {
        if (el.id === Number(res.id)) {
          idForDel = Number(el.ids);
        }
      });
      // удаляем фильм на бекенде из Queue
      await deleteDataFromBackEndQueue(idForDel);
      Notiflix.Notify.info('Фильм удален из QUEUE.');
      return;
    }
  } catch (error) {
    console.log(error);
  } finally {
    // делаем рефреш страници
    refs.modal.classList.add('is-hidden');
    document.querySelector('body').classList.remove('stop-scrolling');
    if (refs.showWatchedBtn.classList.contains('color-orange')) {
      onWatchedBtnClick();
    } else {
      onQueueBtnClick();
    }
  }
}

export { deleteFilm };
