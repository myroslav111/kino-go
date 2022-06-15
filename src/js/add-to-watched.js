let arrayWatched = [];

//  фун. додавання клікнутого фільму у локал сторедж
function addToWatched(event) {
  event.preventDefault();
  console.log('addToWatched', event.target);
  console.log('WATCHED - Фильм добавлен в список просмотренных фильмов');
  

}

export { addToWatched };
