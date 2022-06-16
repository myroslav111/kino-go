import { postDataBackEnd, getDataBackEnd } from './api-back-end';
import { getData } from './api';

let arrayWatched = [];
const obj = {};
//  фун. додавання клікнутого фільму у локал сторедж
async function onAddToWatchedBtnClick(event) {
  // event.preventDefault();
  // if(arrayWatched.includes(event.target.id)){
  //     console.log("Такой фильм уже есть в списке");
  //     alert("Такой фильм уже есть в списке");
  //     return;
  // }
  //   отпарвка данных на бек
  //   const res = await (await getData(event.target.id)).data;
  //   console.log(res);

  await postDataToBackEndWatched(event.target.id);

  console.log('WATCHED - Фильм добавлен в список просмотренных фильмов');
  localStorage.setItem('watched', JSON.stringify(arrayWatched));
}

async function postDataToBackEndWatched(id) {
  const respons = await (await getData(id)).data;
  obj.id = respons.id;
  obj.genres = [...respons.genres];
  obj.poster_path = respons.poster_path;
  obj.release_date = respons.release_date;
  obj.title = respons.title;
  obj.vote_average = respons.vote_average;
  obj.vote_count = respons.vote_count;

  postDataBackEnd(obj);
}

export { onAddToWatchedBtnClick };
