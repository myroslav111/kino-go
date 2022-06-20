import { refs } from './refs';
import { singleCardItem } from './search-item-list';

refs.logoEl.addEventListener('click', onLogoClick);

// фун. рендер стартової сторінки при клікі на лого
function onLogoClick() {
  localStorage.setItem('pageNumber', 1);
  refs.container.innerHTML = '';
  if (!refs.library.classList.contains('current')) {
    refs.formEl.reset();
  }
  console.log(document.querySelector('.nav'));
  document.querySelector('.pager').innerHTML = '';
  singleCardItem();
  refs.logoEl.removeEventListener('click', onLogoClick);
}

export { onLogoClick };
