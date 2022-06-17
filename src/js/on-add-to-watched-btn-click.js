import { postDataToBackEndWatched } from './api-back-end';
import { getData } from './api';

const obj = {};
let arrayWatched = localStorage.getItem('watched') !== null ? JSON.parse(localStorage.getItem('watched')) : [];

//  фун. додавання клікнутого фільму у локал сторедж
async function onAddToWatchedBtnClick(event) {
  // event.preventDefault();
  // console.log("before record arrayWatched", arrayWatched);
  // console.log("localStorage.getItem('watched')", localStorage.getItem('watched')); 

  if(arrayWatched.includes(event.target.id)){
      console.log("Такой фильм уже есть в списке");
      alert("Такой фильм уже есть в списке");
      return;
  }

  arrayWatched.push(event.target.id);

  //   отправка данных на бек
  //   const res = await (await getData(event.target.id)).data;
  //   console.log(res);

  await createDataObjectAndPostToBackEnd(event.target.id);

  console.log('WATCHED - Фильм добавлен в список просмотренных фильмов');
  localStorage.setItem('watched', JSON.stringify(arrayWatched));
  // console.log("after record arrayWatched", arrayWatched);
  // console.log("конец ф-ии localStorage", localStorage.getItem('watched'))
}

async function createDataObjectAndPostToBackEnd(id) {
  const respons = await (await getData(id)).data;
  obj.id = respons.id;
  obj.genres = [...respons.genres];
  obj.poster_path = respons.poster_path;
  obj.release_date = respons.release_date;
  obj.title = respons.title;
  obj.vote_average = respons.vote_average;
  obj.vote_count = respons.vote_count;

  postDataToBackEndWatched(obj);
}

export { onAddToWatchedBtnClick };
