import Notiflix from 'notiflix';

async function onWatchedBtnClickForLocalStorage(e) {
    // блок для localStorage
  const watchedFilms = localStorage.getItem('watched');
  console.log("watchedFilms", watchedFilms);
    if (watchedFilms === null) {
      Notiflix.Notify.failure('В WATCHED нет фильмов.');
      return;
    }
    // создание разметки по шаблону из распарсеного ответа из localStorage
    const markup = singleCardTpl(JSON.parse(watchedFilms));
    refs.container.innerHTML = markup;
}
export { onWatchedBtnClickForLocalStorage };