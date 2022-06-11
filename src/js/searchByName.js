import { refs } from './refs';
import { getDataByInput } from './api';
import singleCard from '../templates/singleCard.hbs';
import { renderButtons } from './paginator';

refs.formEl.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const formData = e.target.header.value;
  if (formData === '') {
    return;
  }
  console.log(e.target.header.value);
  const response = await (await getDataByInput(formData)).data;

  console.log(response.total_pages);
  refs.container.innerHTML = singleCard(response.results);
  refs.pagContainer.innerHTML = '';
  if (response.total_pages > 1) {
    refs.pagContainer.insertAdjacentHTML('afterbegin', renderButtons(response.total_pages));
  } else {
    refs.pagContainer.insertAdjacentHTML('afterbegin', renderButtons(1));
  }

  // document.querySelector('.nav').classList.add('is-hidden');
}

export { onFormSubmit };
