import {createDataObjectByIdFromAPI} from './create-data-object-by-id-from-api'

async function deleteFilmFromLocalStorage(event) {
      const filmData = await createDataObjectByIdFromAPI(event.target.id);

    console.log(filmData);
}

export {deleteFilmFromLocalStorage}