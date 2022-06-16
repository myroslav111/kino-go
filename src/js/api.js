import Notiflix from 'notiflix';
import axios from 'axios';

const key = '44d416356c22cc8e7735ee915c193364';
const URL = 'https://api.themoviedb.org/3/movie/';
const URI = `https://api.themoviedb.org/3/movie/popular`;

// поиск по id
async function getData(id) {
  try {
    const response = await axios.get(`${URL}/${id}?api_key=${key}&language=ru`);
    Notiflix.Loading.custom({
      customSvgUrl:
        'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    });
    console.log();
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove(2000);
  }
}

// поиск популярных фил.
async function getDataSingleCard(page) {
  try {
    const response = await axios.get(`${URI}?api_key=${key}&language=ru&page=${page}`);
    Notiflix.Loading.custom('Loading...', {
      customSvgCode:
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">...</svg>',
    });
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove(2000);
  }
}

// запрос на жанри
async function getDataGenre() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=ru`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// поиск по инпуту
const page = 1;
async function getDataByInput(input, page) {
  try {
    const response = await axios.get(`
    https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${input}&language=ru&page=${page}`);
    // console.log(response.data.genres);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// запрос на трейлер
async function getTrailer(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=ru`,
    );
    // console.log(response.data.genres);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { getData, getDataSingleCard, getDataGenre, getDataByInput, getTrailer };
