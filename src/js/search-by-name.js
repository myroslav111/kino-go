import { refs } from './refs';
import { getDataByInput } from './api';
import singleCard from '../templates/single-card.hbs';
import { renderButtons } from './paginator';
import { getCardByName } from './get-films-by-name';

refs.formEl.addEventListener('submit', onFormSubmit);

// фун. при клікі на лупу(кнопка) рендер пошуку по інпуту
async function onFormSubmit(e) {
  e.preventDefault();

  // текст інпуту
  const formData = e.target.header.value;
  if (formData === '') {
    return;
  }

  const response = await getCardByName(formData);
  console.log('🚀 ~ response', response);
  refs.container.innerHTML = singleCard(response.results);
  refs.pagContainer.innerHTML = '';

  // умови для роботи пагінатора
  if (response.total_pages > 1) {
    refs.pagContainer.insertAdjacentHTML('afterbegin', renderButtons(response.total_pages));

    if (response.total_pages < 6) {
      document.querySelector('#left').classList.add('visually-hidden');
      document.querySelector('#rigth').classList.add('visually-hidden');
    }
  } else {
    refs.pagContainer.insertAdjacentHTML('afterbegin', renderButtons(1));
    document.querySelector('#left').classList.add('visually-hidden');
    document.querySelector('#rigth').classList.add('visually-hidden');
  }
}

export { onFormSubmit };
