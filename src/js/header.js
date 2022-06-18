import { refs } from './refs';
import { singleCardItem } from './search-item-list';
import { onWatchedBtnClick } from './on-watched-btn-click';

refs.logoEl.addEventListener('click', onLogoClick);

// фун. рендер стартової сторінки при клікі на лого
function onLogoClick() {
  refs.container.innerHTML = '';
  console.log(document.querySelector('.nav'));
  document.querySelector('.pager').innerHTML = '';
  singleCardItem();
}

export { onLogoClick };
