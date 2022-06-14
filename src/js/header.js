import { refs } from './refs';
import { singleCardItem } from './search-item-list';

refs.logoEl.addEventListener('click', onLogoClick);

function onLogoClick() {
  refs.container.innerHTML = '';
  singleCardItem();
}

export { onLogoClick };
