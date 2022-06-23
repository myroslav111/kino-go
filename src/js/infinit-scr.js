import { singleCardItem } from './search-item-list';
import { refs } from './refs';

let num = 1;

//фун. для инфинити скрола
function observeOnLastElOfGallery(set) {
  const optios = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  function handleImg(myImg, observer) {
    if (myImg[0].isIntersecting) {
      num += 1;
      loadImage(num);
    }
  }

  const observer = new IntersectionObserver(handleImg, optios);
  observer.observe(set[set.length - 1]);
  function loadImage(num) {
    singleCardItem(num);
  }
}

export { observeOnLastElOfGallery };
