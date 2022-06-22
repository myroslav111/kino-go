const refs = {
  modal: document.querySelector('#modal'),
  container: document.querySelector('.container'),

  formEl: document.querySelector('form'),

  headerEl: document.querySelector('.header'),
  logoEl: document.querySelector('.header__home'),

  inputEl: document.querySelector('input'),

  home: document.querySelector('.header-home-js'),
  library: document.querySelector('.header-library-js'),

  showWatchedBtn: document.querySelector('button[data-action="show-watched"]'),
  showQueueBtn: document.querySelector('button[data-action="show-queue"]'),

  students: document.querySelectorAll('.footer__team'),
  modalStudents: document.querySelector('.backdrop'),
  closeModalTeam: document.querySelector('button.close'),
  teamList: document.querySelector('.team-list'),
  scrollToTopBtn: document.querySelector('.scroll__to--top'),

  pagContainer: document.querySelector('.pager'),
};

export { refs };
