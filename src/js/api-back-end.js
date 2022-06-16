import Notiflix from 'notiflix';
import axios from 'axios';

async function getDataBackEnd() {
  try {
    const response = await axios.get(`https://62a9f628371180affbcc1dc4.mockapi.io/filmoteca/1`);
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove(2000);
  }
}

async function putDataBackEnd(data) {
  try {
    const response = await axios.put(
      `https://62a9f628371180affbcc1dc4.mockapi.io/filmoteca/1`,
      data,
    );
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove(2000);
  }
}
putDataBackEnd();

export { getDataBackEnd, putDataBackEnd };
