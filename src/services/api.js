import 'whatwg-fetch';

import {API_URL, CATEGORY_TYPES} from './consts';

class GhibliService {
    getData(type, id = '') {
        return fetch(`${API_URL}${type}/${id}`)
        .then((response) => {
            return response.json();
        })
    };
    
    getFilmOrFilms(id = '') {
        const filmType = id ? CATEGORY_TYPES.FILM : CATEGORY_TYPES.FILMS;
        return this.getData(filmType);
    };

    getPeople(id = '') {
        return this.getData(CATEGORY_TYPES.PEOPLE, id);
    };
    getLocations(id = '') {
        return this.getData(CATEGORY_TYPES.LOCATIONS, id);
    };
    getSpecies(id = '') {
        return this.getData(CATEGORY_TYPES.SPECIES, id);
    };
    getVehicles(id = '') {
        return this.getData(CATEGORY_TYPES.VEHICLES, id);
    };
}

export default GhibliService;