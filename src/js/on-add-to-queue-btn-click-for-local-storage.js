function onAddToQueueBtnClickForLocalStorage(event) {
    // создание объекта данных фильма по id
  const filmData = await createDataObjectByIdFromAPI(event.target.id);

  // блок для localStorage
  let arrayQueue = localStorage.getItem('queue') !== null ? JSON.parse(localStorage.getItem('queue')) : [];
  // проверка на наличие текущего фильма в списке фильмов
  let isInArray = arrayQueue.some(elem => elem.title === filmData.title)
  if(isInArray){
    Notiflix.Notify.failure("Такой фильм уже есть в QUEUE.");
    return;
  }
  arrayQueue.push(filmData);
  localStorage.setItem('queue', JSON.stringify(arrayQueue));
}

export { onAddToQueueBtnClickForLocalStorage };