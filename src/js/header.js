import { refs } from './refs';
import { singleCardItem } from './search-item-list';

refs.logoEl.addEventListener('click', onLogoClick);

// фун. рендер стартової сторінки при клікі на лого
function onLogoClick() {
  refs.container.innerHTML = '';
  singleCardItem();
}

export { onLogoClick };
