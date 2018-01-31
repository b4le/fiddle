import 'whatwg-fetch';

import {API_URL, API_ENDPOINTS} from './consts';

class GhibliService {
    getData(type, id = '') {
        return fetch(`${API_URL}/${API_ENDPOINTS[type]}/${id}`)
        .then((response) => {
            return response.json();
        })
    };
    
    getFilms() {
        return this.getData('FILMS');
    };

    getFilm(id = '') {
        return this.getData('FILMS', id);
    };

    getPeople(id = '') {
        return this.getData('PEOPLE', id);
    };
    getLocations(id = '') {
        return this.getData('LOCATIONS', id);
    };
    getSpecies(id = '') {
        return this.getData('SPECIES', id);
    };
    getVehicles(id = '') {
        return this.getData('VEHICLES', id);
    };
}

export default GhibliService;