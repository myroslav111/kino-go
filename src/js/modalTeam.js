import { refs } from './refs';

// добавляет слушателя на GoIT Students в футере
refs.students.addEventListener('click', onStudentsClick);
refs.modalStudents.addEventListener('click', closeModalOnBackdropClick);

// при нажатии на GoIT Students в футере
function onStudentsClick(event) {
    event.preventDefault();
    refs.modalStudents.classList.remove('is-hidden');
    document.addEventListener('keydown', onModalPressEsc);
    refs.closeModalTeam.addEventListener('click', closeModalOnCrossClick);
}

// закрывает модалку при Escape
function onModalPressEsc(event) {
             if(event.code === "Escape"){
                 refs.modalStudents.classList.add('is-hidden');
                    document.removeEventListener('keydown', onModalPressEsc)
          }
}
        
// закрывает модалку при click на backdrop
function closeModalOnBackdropClick(event) {
    if (event.target === refs.modalStudents) {
        // console.log("event.target", event.target);
        refs.modalStudents.classList.add('is-hidden');
    }
}

// закрывает модалку при click на "крестик"
function closeModalOnCrossClick(event){
    if (event.currentTarget === refs.closeModalTeam) {
        // console.log("event.target", event.target);
        refs.modalStudents.classList.add('is-hidden');
        refs.closeModalTeam.removeEventListener('click', closeModalOnCrossClick)
    }    
}        

export {onStudentsClick, onModalPressEsc, closeModalOnBackdropClick, closeModalOnCrossClick}