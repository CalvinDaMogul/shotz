import 'bootstrap';
import '../styles/main.scss';
import movies from './components/movies/movies';
import location from './components/Locations/locations';


const init = () => {
  movies.initializeMovies();
  location.initializeLocations();
};

init();
