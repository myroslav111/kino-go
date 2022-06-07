import { getDataSingleCard, getDataGenre } from './api';
import singleCard from '../templates/singleCard.hbs';
import { refs } from './refs';

async function singleCardItem() {
  try {
    const res = await (await getDataSingleCard()).data;
    const dataCinema = res.results;
    console.log(dataCinema);
    // const genre = await (await getDataGenre()).data.genres;
    // console.log(genre);

    // const d = dataCinema.map(el => {
    //   el.genre_ids.map(ele => {
    //     genre.filter(q => {
    //       if (q.id === ele) {
    //         q.name;
    //       }
    //     });
    //   });
    // });
    // console.log(d);

    const markup = singleCard(dataCinema);

    refs.container.insertAdjacentHTML('afterbegin', markup);
  } catch (error) {
    console.log(error);
  }
}
// singleCardItem();

export { singleCardItem };
