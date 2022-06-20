import { refs } from './refs';
import { getDataByInput } from './api';
import singleCardTpl from '../templates/single-card.hbs';
import { renderButtons } from './paginator';
import { getCardByName } from './get-films-by-name';
import Notiflix from 'notiflix';
import { onLogoClick } from './on-logo-click';

refs.formEl.addEventListener('submit', onFormSubmit);

// фун. при клікі на лупу(кнопка) рендер пошуку по інпуту
async function onFormSubmit(e) {
  e.preventDefault();
  localStorage.setItem('pageNumber', 1);

  // текст інпуту
  const formData = e.target.header.value;
  // перевірка на пустий інпут
  if (formData === '') {
    onLogoClick();
    Notiflix.Notify.failure('Щось введіть');
    return;
  }

  // перевірка на кількість запитів + Абракадабра
  const response = await getCardByName(formData);
  if (response.total_pages > 6) {
    Notiflix.Notify.failure('Невірний запит');
    return;
  } else if (response.total_pages === 0) {
    Notiflix.Notify.failure('Абракадабра');
    return;
  }

  refs.container.innerHTML = singleCardTpl(response.results);
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
