const PLANETS_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets';

export default function getPlanets() {
  return fetch(PLANETS_API_URL).then((response) => response.json());
}
