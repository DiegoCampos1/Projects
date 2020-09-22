export const SET_FILTER_VARIABLES = 'SET_FILTER_VARIABLES';
export const SET_FILTERED_BY_NUMERIC = 'SET_FILTERED_BY_NUMERIC';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export function setNumericFilterVariables(filter) {
  return {
    type: SET_FILTER_VARIABLES,
    column: filter.column,
    comparison: filter.comparison,
    value: filter.value,
  };
}

export const setPlanetsFilteredByNumeric = () => ({ type: SET_FILTERED_BY_NUMERIC });

export const removeFilter = (filterToRemove) => ({ type: REMOVE_FILTER, filterToRemove });
