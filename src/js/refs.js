const refs = {
  modal: document.querySelector('#modal'),
  container: document.querySelector('.container'),

  formEl: document.querySelector('form'),

  headerEl: document.querySelector('.header'),
  logoEl: document.querySelector('.header__home'),
  // libraryBtnEl: document.querySelector('.library__search--btn'),

  showWatchedBtn: document.querySelector('button[data-action="show-watched"]'),
  showQueueBtn: document.querySelector('button[data-action="show-queue"]'),

  students: document.querySelectorAll('.footer__team'),
  modalStudents: document.querySelector('.backdrop'),
  closeModalTeam: document.querySelector('button.close'),
  teamList: document.querySelector('.team-list'),

  pagContainer: document.querySelector('.pager'),
};

export { refs };
