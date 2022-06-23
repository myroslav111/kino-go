import { getData } from './api';
import { getCardByName } from './get-films-by-name';

const obj = {};

// создание объекта из API по id  
async function createDataObjectByIdFromApiForLocalStorage(id) {
  const response = await (await getData(id)).data;
  obj.id = response.id;
  obj.genres = [...response.genres.map(el => (el.name))];
  obj.poster_path = response.poster_path;
  obj.release_date = response.release_date;
  obj.title = response.title;
  obj.vote_average = response.vote_average;
  obj.vote_count = response.vote_count;
  return obj;
}

export {createDataObjectByIdFromApiForLocalStorage}