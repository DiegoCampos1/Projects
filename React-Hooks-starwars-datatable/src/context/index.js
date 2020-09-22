import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/getPlanets';

const INITIAL_STATE = {
  isFetching: true,
  data: [],
  filteredPlanets: [],
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],

  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

export const StarWarsContext = createContext();

const applyNumericFilters = (planets, filters) => {
  let filteredPlanets = planets;
  filters.forEach((filter) => {
    const { column, comparison, value } = filter;
    filteredPlanets = filteredPlanets.filter((planet) => {
      if (comparison === 'maior que') return Number(planet[column]) > Number(value);
      if (comparison === 'menor que') return Number(planet[column]) < Number(value);
      if (comparison === 'igual a') return Number(planet[column]) === Number(value);
      return null;
    });
  });
  return filteredPlanets;
};

export default function StarWarsProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    getPlanets().then((planetsData) => setState({
      ...state,
      data: planetsData.results,
      isFetching: false,
      filteredPlanets: planetsData.results,
    }));
  }, []);

  function setFilterByName(planets, string) {
    const filteredPlanets = planets.filter(({ name }) => name
      .toLowerCase().includes(string.toLowerCase()));
    setState({
      ...state,
      filteredPlanets,
      filterByName: { name: string },
    });
  }

  function setVariables(filter) {
    setState({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues,
        { column: filter.column, comparison: filter.comparison, value: filter.value },
      ],
    });
  }

  useEffect(() => {
    const planets = state.filterByNumericValues.length === 0 ? state.data : state.filteredPlanets;
    const filteredPlanets = applyNumericFilters(planets, state.filterByNumericValues);
    setState({ ...state, filteredPlanets });
  }, [state.filterByNumericValues]);

  function removeFilter(filter) {
    const newFilteredByNumericValues = state.filterByNumericValues.filter(
      ({ column }) => column !== filter.column,
    );
    setState({ ...state, filterByNumericValues: newFilteredByNumericValues });
  }

  const Context = {
    state,
    setState,
    setFilterByName,
    setVariables,
    removeFilter,
  };

  return <StarWarsContext.Provider value={Context}>{children}</StarWarsContext.Provider>;
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
