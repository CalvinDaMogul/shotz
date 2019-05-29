import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

let moviesArray = [];

const domStringBuilder = (movieView) => {
  let domString = '';
  movieView.forEach((movie) => {
    domString += '<div class="card" style="width: 18rem;">';
    domString += `<div class="card-body" id=${movie.id}>`;
    domString += `<h5 class="card-title">${movie.name}</h5>`;
    domString += `<p class="card-text" id="ptag">Movie Type: ${movie.genre}</p>`;
    domString += `<p class="card-text" id="ptag"> Release:${movie.releaseDate}</p>`;
    domString += `<img class="card-img-top" src="${movie.imgUrl}" alt="Card image cap">`;
    domString += `<p class="card-text">${movie.description}</p>`;
    domString += `<p class="card-text"> Locations:${movie.locations.length}</p>`;
    domString += '<button type="button" id="click" class="btn btn-light">Movie Viewings</button>';
    domString += '</div>';
    domString += '</div>';
  });

  util.printToDom('movies', domString);
};

const filterButtonEvent = (e) => {
  e.stopPropagation();
  const buttonId = e.target.parentElement.id;
  const movie1 = moviesArray.filter(x => x.id === 'movie1');
  const movie2 = moviesArray.filter(x => x.id === 'movie2');
  const movie3 = moviesArray.filter(x => x.id === 'movie3');
  const movie4 = moviesArray.filter(x => x.id === 'movie4');
  switch (buttonId) {
    case 'movie1':
      domStringBuilder(movie1);
      break;
    case 'movie2':
      domStringBuilder(movie2);
      break;
    case 'movie3':
      domStringBuilder(movie3);
      break;
    case 'movie4':
      domStringBuilder(movie4);
      break;
    default:
      domStringBuilder(moviesArray);
  }
};

const singleMovie = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      moviesArray = movieResults;
      domStringBuilder(moviesArray);
      document.getElementById('movie1').addEventListener('click', filterButtonEvent);
      document.getElementById('movie2').addEventListener('click', filterButtonEvent);
      document.getElementById('movie3').addEventListener('click', filterButtonEvent);
      document.getElementById('movie4').addEventListener('click', filterButtonEvent);
    })
    .catch(err => console.error(err));
};

export default { singleMovie };
