const PLANETS_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';

export function getPlanets() {
  return fetch(PLANETS_API_URL).then((response) => response.json());
}

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';

const requestPlanets = () => ({ type: REQUEST_PLANETS });
const requestPlanetsSuccess = (planets) => ({
  type: REQUEST_PLANETS_SUCCESS,
  planetsData: planets,
});

export default function fetchPlanets() {
  return async (dispatch) => {
    dispatch(requestPlanets());

    const planets = await getPlanets();
    return dispatch(requestPlanetsSuccess(planets.results));
  };
}
