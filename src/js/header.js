import { refs } from './refs';
import { singleCardItem } from './search-item-list';

refs.logoEl.addEventListener('click', onLogoClick);

// фун. рендер стартової сторінки при клікі на лого
function onLogoClick() {
  refs.container.innerHTML = '';
  console.log(document.querySelector('.nav'));
  document.querySelector('.pager').innerHTML = '';
  singleCardItem();
}

export { onLogoClick };
