import { getDataGenre, getDataByInput } from './api';

// Ф-я отримання усіх популярних карток фільмів
async function getCardByName(name, page) {
  // *усі жанри
  const getJanre = await getDataGenre();

  // * проміс карточок фільмів
  const getFilms = await getDataByInput(name, page);

  // * розпромісовані карточки фільмів
  const filmsByName = getFilms.data;

  // * перебор фільмів
  filmsByName.results.forEach(({ genre_ids }, index) => {
    const stringJanres = getJanre.genres
      .filter(el => {
        return genre_ids.includes(el.id);
      })
      .map(({ name }) => {
        return name;
      });

    stringJanres.splice(2, 5, 'Other');
    filmsByName.results[index].janreStr = stringJanres;
  });
  return filmsByName;
}

getCardByName();

export { getCardByName };
