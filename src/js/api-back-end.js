import Notiflix from 'notiflix';
import axios from 'axios';

// запрос на получение масива с обьектами фильмов с бекенда для Watched
async function getDataFromWatchedBackEnd() {
  try {
    const response = await axios.get(`https://62a9f628371180affbcc1dc4.mockapi.io/filmoteca`);
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove(2000);
  }
}

// запрос на получение масива с обьектами фильмов с бекенда для Queue
async function getDataFromQueueBackEnd() {
  try {
    const response = await axios.get(`https://62ab9803a62365888bdecd3c.mockapi.io/filmoteca2`);
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove(2000);
  }
}

// отправка обьекта с фильмом на бекенд в библиотеку Watched
async function postDataToBackEndWatched(data) {
  try {
    const response = await axios.post(
      `https://62a9f628371180affbcc1dc4.mockapi.io/filmoteca`,
      data,
    );
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    // Notiflix.Loading.remove(2000);
  }
}

// отправка обьекта с фильмом на бекенд в библиотеку Queue
async function postDataToBackEndQueue(data) {
  try {
    const response = await axios.post(
      `https://62ab9803a62365888bdecd3c.mockapi.io/filmoteca2`,
      data,
    );
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    //   Notiflix.Loading.remove(2000);
  }
}

// удаление обьекта с фильмом с библиотеки бекенда Watched
async function deleteDataFromBackEndWatched(id) {
  try {
    await axios.delete(`https://62a9f628371180affbcc1dc4.mockapi.io/filmoteca/${id}`);
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
  } catch (error) {
    console.log(error);
  } finally {
    //   Notiflix.Loading.remove(2000);
  }
}

// удаление обьекта с фильмом с библиотеки бекенда Queue
async function deleteDataFromBackEndQueue(id) {
  try {
    await axios.delete(`https://62ab9803a62365888bdecd3c.mockapi.io/filmoteca2/${id}`);
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
  } catch (error) {
    console.log(error);
  } finally {
    //   Notiflix.Loading.remove(2000);
  }
}

export {
  getDataFromWatchedBackEnd,
  postDataToBackEndWatched,
  getDataFromQueueBackEnd,
  postDataToBackEndQueue,
  deleteDataFromBackEndQueue,
  deleteDataFromBackEndWatched,
};
