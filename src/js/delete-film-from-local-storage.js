import {createDataObjectByIdFromApiForLocalStorage} from './create-data-object-by-id-from-api-for-local-storage'

async function deleteFilmFromLocalStorage(event) {
      const filmData = await createDataObjectByIdFromApiForLocalStorage(event.target.id);

    console.log(filmData);
}

export {deleteFilmFromLocalStorage}