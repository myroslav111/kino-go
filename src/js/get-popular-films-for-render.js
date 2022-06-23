import { getDataGenre, getDataSingleCard } from './api';

// Ф-я отримання усіх популярних карток фільмів
async function getAllCardFilms(page) {
  // *усі жанри
  const getJanre = await getDataGenre();

  // * проміс карточок фільмів
  const getFilms = await getDataSingleCard(page);

  // * розпромісовані карточки фільмів
  const films = getFilms.data;

  // * перебор фільмів
  films.results.forEach(({ genre_ids, release_date }, index) => {
    const date = release_date.slice(0, 4);
    films.results[index].date_release = date;
    const stringJanres = getJanre.genres
      .filter(el => {
        return genre_ids.includes(el.id);
      })
      .map(({ name }) => {
        return name;
      });

    stringJanres.splice(2, 5, 'Other');
    films.results[index].janreStr = stringJanres;
  });
  return films;
}

getAllCardFilms();

export { getAllCardFilms };
