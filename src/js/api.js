import Notiflix from 'notiflix';
import axios from 'axios';

const URL = `https://api.themoviedb.org/3/search/movie?api_key=44d416356c22cc8e7735ee915c193364`;
const URI = `
https://api.themoviedb.org/3/movie/popular?api_key=44d416356c22cc8e7735ee915c193364`;
// const URL = `https://api.themoviedb.org/4/movie/550?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ0MTYzNTZjMjJjYzhlNzczNWVlOTE1YzE5MzM2NCIsInN1YiI6IjYyOWRmYTg4MWU5MjI1MDA0Zjk1MDNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eTnkWUBYujk7uSoBqELU5o7IiVHIx7KgVd1WGDo_BiQ`;

async function getData() {
  try {
    const response = await axios.get(`${URL}&query=Jack+Reacher&language=ru`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getDataSingleCard() {
  try {
    const response = await axios.get(`${URI}&language=ru&page=1`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getDataGenre() {
  try {
    const response = await axios.get(`
    https://api.themoviedb.org/3/genre/movie/list?api_key=44d416356c22cc8e7735ee915c193364&language=ru`);
    // console.log(response.data.genres);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { getData, getDataSingleCard, getDataGenre };
