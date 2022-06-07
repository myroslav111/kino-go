import { getDataSingleCard, getDataGenre } from './api';
import singleCard from '../templates/singleCard.hbs';
import { refs } from './refs';

async function singleCardItem() {
  try {
    const res = await (await getDataSingleCard()).data;
    const dataCinema = res.results;
    // console.log(dataCinema);
    const genre = await (await getDataGenre()).data.genres;
    // console.log(genre);

    const d = dataCinema.map(el => {
      el.genre_ids.map(ele => {
        const genr = genre.filter(
          q => (q.id === ele ? q.name : console.log('j')),
          // console.log(q);
          // console.log(ele === q.id);

          // console.log(q.name);

          // console.log(genr);
        );
        console.log(genr);
      });
      // console.log(genr);
    });
    // console.log(d);

    const markup = singleCard(dataCinema);

    refs.container.insertAdjacentHTML('afterbegin', markup);
  } catch (error) {
    console.log(error);
  }
}
// singleCardItem();

export { singleCardItem };
