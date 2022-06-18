import {
  getDataFromWatchedBackEnd,
  deleteDataToBackEndWatched,
  getDataFromQueueBackEnd,
  deleteDataToBackEndQueue,
} from './api-back-end';
import { refs } from './refs';
import { getData } from './api';
import { onWatchedBtnClick } from './on-watched-btn-click';
import { onQueueBtnClick } from './on-queue-btn-click';

async function deleteFilm(e) {
  try {
    const res = await (await getData(e.target.id)).data;
    let idForDel;
    if (refs.showWatchedBtn.classList.contains('color-orange')) {
      const responseWatched = await getDataFromWatchedBackEnd();
      const dataResWatched = responseWatched.data;
      // находим айди фильма в нашем беке для удаления
      dataResWatched.map(el => {
        if (el.id === Number(res.id)) {
          idForDel = Number(el.ids);
        }
      });
      await deleteDataToBackEndWatched(idForDel);
      return;
    } else {
      const responseQueue = await getDataFromQueueBackEnd();
      const dataResQueue = responseQueue.data;
      dataResQueue.map(el => {
        if (el.id === Number(res.id)) {
          idForDel = Number(el.ids);
        }
      });
      await deleteDataToBackEndQueue(idForDel);
      return;
    }
  } catch (error) {
    console.log(error);
  } finally {
    refs.modal.classList.add('is-hidden');
    if (refs.showWatchedBtn.classList.contains('color-orange')) {
      onWatchedBtnClick();
    } else {
      onQueueBtnClick();
    }
  }
}

export { deleteFilm };
