import { putDataBackEnd, getDataBackEnd } from './api-back-end';

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
  await putDataToBackEndWatched(event.target.id);

  console.log('WATCHED - Фильм добавлен в список просмотренных фильмов');
  localStorage.setItem('watched', JSON.stringify(arrayWatched));
}

async function putDataToBackEndWatched(id) {
  console.log(id);
  const res = await getDataBackEnd();
  const dataRes = res.data;
  arrayWatched = [...dataRes.watched];
  arrayWatched.push(id);
  obj.watched = arrayWatched;
  putDataBackEnd(obj);
}

export { onAddToWatchedBtnClick };
