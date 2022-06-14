import developerCardTpl from '../templates/modal-team.hbs';
import developers from '../developers.json';
import { refs } from './refs';

// рендер карточек членов команды
function renderDevelopersCards() {   
    const markup = developerCardTpl(developers);  
    refs.teamList.innerHTML = markup;  
}

export { renderDevelopersCards };