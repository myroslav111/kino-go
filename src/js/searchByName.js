import { refs } from './refs';
import { getDataByInput } from './api';

// запрос на бек по инпуту
async function searchFilmByName(name) {
  try {
    const respons = await (await getDataByInput(name)).data;
  } catch (error) {
    console.log(error);
  }
}
