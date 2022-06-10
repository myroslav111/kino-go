import { refs } from './refs';

// добавляет слушателя на GoIT Students в футере
refs.students.addEventListener('click', onStudentsClick);
refs.modalStudents.addEventListener('click', closeModal)

// при нажатии на GoIT Students в футере
function onStudentsClick(event) {
    event.preventDefault();
    refs.modalStudents.classList.remove('is-hidden');
    document.addEventListener('keydown', onModalPressEsc)
}

// закрывает модалку при Escape
function onModalPressEsc(event) {
    // console.log(event);
             if(event.code === "Escape"){
                 refs.modalStudents.classList.add('is-hidden');
                    document.removeEventListener('keydown', onModalPressEsc)
          }
}
        
// закрывает модалку при click на backdrop
function closeModal(event) {
    if (event.target === refs.modalStudents) {
        refs.modalStudents.classList.add('is-hidden');
    }
}
        
export {onStudentsClick, onModalPressEsc, closeModal}