import 'bootstrap';
import '../styles/main.scss';
import movies from './components/movies/movies';
import location from './components/Locations/locations';
import view from './components/movies/movieView';


const init = () => {
  movies.initializeMovies();
  location.initializeLocations();
  view.singleMovie();
};

init();
