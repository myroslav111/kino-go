import { refs } from './refs';
import { singleCardItem } from './searchItemList';

refs.logoEl.addEventListener('click', onLogoClick);

function onLogoClick() {
  refs.container.innerHTML = '';
  singleCardItem();
}

export { onLogoClick };
