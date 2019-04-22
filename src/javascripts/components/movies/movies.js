import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += '<div class="card" style="width: 18rem;">';
    // domString += '<img class="card-img-top" src=".../100px180/" alt="Card image cap">';
    domString += `<div class="card-body" id=${movie.id}>`;
    domString += `<h5 class="card-title">${movie.name}</h5>`;
    domString += `<p class="card-text">${movie.genre}</p>`;
    domString += `<p class="card-text">${movie.releaseDate}</p>`;
    domString += `<p class="card-text">${movie.description}</p>`;
    domString += `<p class="card-text"> locations:${movie.locations.length}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResults = resp.data.movies;
      movies = moviesResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
