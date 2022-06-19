const scrollToTopBtn = document.querySelector('.scroll__to--top');
const rootElement = document.documentElement;

// *відрізок, на якому з'являється кнопка
function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.15) {
    scrollToTopBtn.classList.add('show--btn');
  } else {
    scrollToTopBtn.classList.remove('show--btn');
  }
}

// *логіка повернення догори
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);

export { scrollToTop };
