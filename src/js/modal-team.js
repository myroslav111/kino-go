import { refs } from './refs';
import { renderDevelopersCards } from './render-developers-cards';

// добавляет слушателя на GoIT Students в футере
refs.students[0].addEventListener('click', onStudentsClick);
refs.students[1].addEventListener('click', onStudentsClick);
refs.modalStudents.addEventListener('click', closeModalOnBackdropClick);

// при нажатии на GoIT Students в футере
function onStudentsClick(event) {
  event.preventDefault();
  refs.modalStudents.classList.remove('is-hidden');
  document.querySelector('body').classList.add('stop-scrolling');
  document.addEventListener('keydown', onModalPressEsc);
  refs.closeModalTeam.addEventListener('click', closeModalOnCrossClick);
  renderDevelopersCards();
}

// закрывает модалку при Escape
function onModalPressEsc(event) {
  if (event.code === 'Escape') {
    refs.modalStudents.classList.add('is-hidden');
    document.querySelector('body').classList.remove('stop-scrolling');
    document.removeEventListener('keydown', onModalPressEsc);
  }
}

// закрывает модалку при click на backdrop
function closeModalOnBackdropClick(event) {
  if (event.target === refs.modalStudents) {
    refs.modalStudents.classList.add('is-hidden');
    document.removeEventListener('keydown', onModalPressEsc);
    document.querySelector('body').classList.remove('stop-scrolling');
  }
}

// закрывает модалку при click на "крестик"
function closeModalOnCrossClick(event) {
  console.log(event.currentTarget === refs.closeModalTeam);
  if (event.currentTarget === refs.closeModalTeam) {
    refs.modalStudents.classList.add('is-hidden');
    document.querySelector('body').classList.remove('stop-scrolling');
    refs.closeModalTeam.removeEventListener('click', closeModalOnCrossClick);
  }
}

export { onStudentsClick, onModalPressEsc, closeModalOnBackdropClick, closeModalOnCrossClick };
