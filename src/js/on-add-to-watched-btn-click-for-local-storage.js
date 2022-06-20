function onAddToWatchedBtnClickForLocalStorage(event) {
    // создание объекта данных фильма по id
  const filmData = await createDataObjectByIdFromAPI(event.target.id);

  // блок для localStorage
  let arrayWatched = localStorage.getItem('watched') !== null ? JSON.parse(localStorage.getItem('watched')) : [];
  // проверка на наличие текущего фильма в списке фильмов
  let isInArray = arrayWatched.some(elem => elem.title === filmData.title)
  if(isInArray){
    Notiflix.Notify.failure("Такой фильм уже есть в WATCHED.");
    return;
  }
  arrayWatched.push(filmData);
  localStorage.setItem('watched', JSON.stringify(arrayWatched));
}

export {onAddToWatchedBtnClickForLocalStorage}