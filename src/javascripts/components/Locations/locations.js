import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-secondary';
      break;
    case 'Afternoon':
      selectedClass = 'bg-success';
      break;
    case 'Evening':
      selectedClass = 'bg-info';
      break;
    case 'After Dark':
      selectedClass = 'bg-danger';
      break;
    default:
      selectedClass = '';
  }
  return selectedClass;
};

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div id="${location.id}" class="card col-2" style="width: 18rem;">`;
    domString += `<h5 class="card-header ${shootTimeClass(location.shootTime)}">${location.name}</h5>`;
    domString += `<img class="card-img-top" src=${location.imageUrl} alt="Card image cap">`;
    domString += '<div class="card-body">';
    domString += `<p class="card-text">${location.address}</p>`;
    // domString += '<a href="#" class="btn btn-primary">Go somewhere</a>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};


const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
