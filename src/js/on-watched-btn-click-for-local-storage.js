function onWatchedBtnClickForLocalStorage(e) {
    // блок для localStorage
    const watchedFilms = localStorage.getItem('watched');
    if (watchedFilms === null) {
      Notiflix.Notify.failure('В WATCHED нет фильмов.');
      return;
    }
    // создание разметки по шаблону из распарсеного ответа из localStorage
    const markup = singleCardTpl(JSON.parse(watchedFilms));
    refs.container.innerHTML = markup;
}
export { onWatchedBtnClickForLocalStorage };