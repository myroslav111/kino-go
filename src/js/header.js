import { refs } from './refs';
// export { searchFilmByName } from './searchByName';
import { getDataByInput } from './api';
import singleCard from '../templates/singleCard.hbs';

refs.formEl.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const formData = e.target.header.value;
  if (formData === '') {
    return;
  }
  const response = await (await getDataByInput(formData)).data;
  refs.container.innerHTML = singleCard(response.results);
}

export { onFormSubmit };
