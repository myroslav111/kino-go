import developerCardTpl from '../templates/modalTeam.hbs'
import developers from '../developers.json'
import { refs } from './refs';

function renderDevelopersCards() {
    console.log("developers", developers);
    const markup = developerCardTpl(developers);
    console.log("markup", markup);
    refs.teamList.innerHTML = markup;
    console.log("teamList", refs.teamList);
}

export { renderDevelopersCards };