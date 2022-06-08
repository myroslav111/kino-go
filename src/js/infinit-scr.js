import { singleCardItem } from './singleItem';
import { refs } from './refs';

//фун. для инфинити скрола
function observeOnLastElOfGallery(set) {
  const optios = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };


  function handleImg(myImg, observer) {
    if (myImg[0].isIntersecting) {
      loadImage();
    }
  }
  
  const observer = new IntersectionObserver(handleImg, optios);
  observer.observe(set[set.length - 1]);
  function loadImage() {
    singleCardItem();
  }
}

export { observeOnLastElOfGallery };
