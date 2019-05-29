import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

// const movieTimeClass = (movieTime) => {
//   let selectedClass = '';
//   switch (movieTime) {
//     case 'Morning':
//       selectedClass = movies.id;
//       break;
//     case 'Afternoon':
//       selectedClass = 'bg-success';
//       break;
//     case 'Evening':
//       selectedClass = 'bg-info';
//       break;
//     case 'After Dark':
//       selectedClass = 'bg-danger';
//       break;
//     default:
//       selectedClass = '';
//   }
//   return selectedClass;
// };


// const filterMovies = () => {
//   const movieCards = Array.from(document.getElementsByClassName('movie'));
//   document.getElementById('location1').addEventListener('click', () => {
//     console.error('location1');
//   });
// };

const domStringBuilder = (movieName) => {
  let domString = '';
  movies.forEach((movie) => {
    if (movieName === '' || movieName === movie.name) {
      domString += '<div class="card" style="width: 18rem;">';
      domString += `<div class="card-body" id=${movie.id}>`;
      domString += `<h5 class="card-title">${movie.name}</h5>`;
      domString += `<p class="card-text" id="ptag">Movie Type: ${movie.genre}</p>`;
      domString += `<p class="card-text" id="ptag"> Release:${movie.releaseDate}</p>`;
      domString += `<img class="card-img-top" src="${movie.imgUrl}" alt="Card image cap">`;
      domString += `<p class="card-text">${movie.description}</p>`;
      domString += `<p class="card-text"> Locations:${movie.locations.length}</p>`;
      domString += '<button type="button" id="click"class="btn btn-light">Movie Viewings</button>';
      domString += '</div>';
      domString += '</div>';
    }
  });

  util.printToDom('movies', domString);
};


const cardClicked = (e) => {
  console.error('cardClicked');
  const movieTitle = e.getElementsByClassName('card-title').innerHTML;
  domStringBuilder(movieTitle);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResults = resp.data.movies;
      movies = moviesResults;
      domStringBuilder('');
    })

    .catch(err => console.error(err));

  const allCards = document.getElementsByClassName('card');
  const newCards = Array.from(allCards);
  console.error('allCards');
  console.error(allCards.length);
  newCards.forEach((card, index) => {
    console.error(index);
    card.addEventListener('click', cardClicked);
  });
};
export default { initializeMovies };
