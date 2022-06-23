import { singleCardItem } from './search-item-list';
import { refs } from './refs';

function startingPage() {
  document.querySelector('body').classList.add('stop-scrolling');
  document.querySelector('.nav-section').classList.add('hidden'); 
  document.querySelector('.main').classList.add('hidden'); 
  document.querySelector('.desktop').classList.add('hidden'); 
  document.querySelector('.video').classList.remove('hidden');

  setTimeout(() => {
    try {
      singleCardItem();
    } catch (error) {
    } finally {
      document.querySelector('.video').classList.add('hidden');
      document.querySelector('body').classList.remove('stop-scrolling');
      document.querySelector('.nav-section').classList.remove('hidden');
      document.querySelector('.main').classList.remove('hidden'); 
      document.querySelector('.desktop').classList.remove('hidden');
    }
  }, 7000);
}

startingPage();
