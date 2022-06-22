import { singleCardItem } from './search-item-list';
import { refs } from './refs';

function startingPage() {
  document.querySelector('.video').classList.remove('hidden');
  document.querySelector('body').classList.add('stop-scrolling');

  setTimeout(() => {
    try {
      singleCardItem();
    } catch (error) {
    } finally {
      document.querySelector('.video').classList.add('hidden');
      document.querySelector('body').classList.remove('stop-scrolling');
    }
  }, 7000);
}

startingPage();
