export const NAME_TO_FILTER = 'NAME_TO_FILTER';
export const SET_FILTERED_BY_NAME = 'SET_FILTERED_BY_NAME';

const setNameToFilter = (name) => ({ type: NAME_TO_FILTER, name });
export const setPlanetsFilteredByName = (planets) => ({ type: SET_FILTERED_BY_NAME, planets });

export default function filterPlanetsByName(planets, string) {
  return (dispatch) => {
    dispatch(setNameToFilter(string));
    const filteredPlanets = planets.filter(({ name }) => name
      .toLowerCase().includes(string.toLowerCase()));
    return dispatch(setPlanetsFilteredByName(filteredPlanets));
  };
}
