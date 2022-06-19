import Notiflix from 'notiflix';
import axios from 'axios';

const key = '44d416356c22cc8e7735ee915c193364';
const URL_FOR_ID = 'https://api.themoviedb.org/3/movie/';
const URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular';
const URL_FOR_GENRE = 'https://api.themoviedb.org/3/genre/movie/list';
const URL_FOR_SEARCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';

// поиск по id фильма на апи themoviedb
async function getData(id) {
  try {
    const response = await axios.get(`${URL_FOR_ID}/${id}?api_key=${key}&language=ru`);
    Notiflix.Loading.custom({
      customSvgUrl:
        'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    });
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove(2000);
  }
}

// поиск популярных фил. на апи themoviedb
async function getDataSingleCard(page) {
  try {
    const response = await axios.get(`${URL_POPULAR}?api_key=${key}&language=ru&page=${page}`);
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

// запрос на жанри на апи themoviedb
async function getDataGenre() {
  try {
    const response = await axios.get(`${URL_FOR_GENRE}?api_key=${key}&language=ru`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// поиск по инпуту на апи themoviedb
const page = 1;
async function getDataByInput(input, page) {
  try {
    const response = await axios.get(`
    ${URL_FOR_SEARCH_BY_NAME}?api_key=${key}&query=${input}&language=ru&page=${page}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// запрос на трейлер на апи themoviedb
async function getTrailer(id) {
  try {
    const response = await axios.get(`${URL_FOR_ID}/${id}/videos?api_key=${key}&language=ru`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { getData, getDataSingleCard, getDataGenre, getDataByInput, getTrailer };
