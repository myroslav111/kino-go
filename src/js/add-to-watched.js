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
// async function back() {
//   const res = await getDataBackEnd();
//   console.log(res.data);
// }
// back();
// const obj = {
//   watched: ['098', '555', '333'],
//   queue: ['345'],
// };

// async function put() {
//   const res = await putDataBackEnd();
//   console.log(res.data);
// }
// back(obj);
