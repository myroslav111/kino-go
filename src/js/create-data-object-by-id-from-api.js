import { getData } from './api';

const obj = {};
// создание объекта из API по id  

async function createDataObjectByIdFromAPI(id) {
  const respons = await (await getData(id)).data;
  obj.id = respons.id;
  obj.genres = [...respons.genres];
  obj.poster_path = respons.poster_path;
  obj.release_date = respons.release_date;
  obj.title = respons.title;
  obj.vote_average = respons.vote_average;
  obj.vote_count = respons.vote_count;
  return obj;
}

export {createDataObjectByIdFromAPI}
