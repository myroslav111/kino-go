import { refs } from './refs';

const rootElement = document.documentElement;

// *відрізок, на якому з'являється кнопка
function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.15) {
    refs.scrollToTopBtn.classList.add('show--btn');
  } else {
    refs.scrollToTopBtn.classList.remove('show--btn');
  }
}

// *логіка повернення догори
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
refs.scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);

export { scrollToTop };
