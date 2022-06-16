import { putDataBackEnd, getDataBackEnd } from './api-back-end';

const obj = {};
let arrayQueue = [];

// фун. додавання клікнутого фільму у локал сторедж
async function onAddToQueueBtnClick(event) {
  // event.preventDefault();
  //   if (arrayQueue.includes(event.target.id)) {
  //     console.log('Такой фильм уже есть в списке');
  //     alert('Такой фильм уже есть в списке');
  //     return;
  //   }
  //   отправка данных на бек
  await putDataToBackEndQueue(event.target.id);

  arrayQueue.push(event.target.id);
  // console.log("arrayQueue", arrayQueue);
  console.log('QUEUE - Фильм добавлен в список просмотренных фильмов');
  localStorage.setItem('queue', JSON.stringify(arrayQueue));
  // return arrayQueue;
}

async function putDataToBackEndQueue(id) {
  console.log(id);
  const res = await getDataBackEnd();
  const dataRes = res.data;
  arrayQueue = [...dataRes.queue];
  arrayQueue.push(id);
  obj.queue = arrayQueue;
  putDataBackEnd(obj);
}

export { onAddToQueueBtnClick };
