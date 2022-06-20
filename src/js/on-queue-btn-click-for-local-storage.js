function onQueueBtnClickForLocalStorage(event) {
    // блок для localStorage

    const queueFilms = localStorage.getItem('queue');
    if (queueFilms === null) {
      Notiflix.Notify.failure('В QUEUE нет фильмов.');
      return;
    }
    // создание разметки по шаблону из распарсеного ответа из localStorage
    const markup = singleCardTpl(JSON.parse(queueFilms));
    refs.container.innerHTML = markup;
}
export { onQueueBtnClickForLocalStorage };