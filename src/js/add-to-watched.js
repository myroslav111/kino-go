import { putDataBackEnd } from './api-back-end';

let arrayWatched = [];
const obj = {};

//  фун. додавання клікнутого фільму у локал сторедж
function addToWatched(event) {
  event.preventDefault();
  console.log('addToWatched', event.target.id);
  arrayWatched.push(event.target.id);
  console.log(arrayWatched);
  obj.watched = arrayWatched;
  console.log(obj);
  console.log('WATCHED - Фильм добавлен в список просмотренных фильмов');
}

export { addToWatched };

console.log('g');
