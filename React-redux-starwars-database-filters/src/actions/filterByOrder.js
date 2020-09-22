export const SET_ORDER_FILTER = 'SET_ORDER_FILTER';
export const SET_FILTERED_BY_ORDER = 'SET_FILTERED_BY_ORDER';

export function setOrderFilter({ column, sort }) {
  return {
    type: SET_ORDER_FILTER,
    column,
    sortKey: sort,
  };
}

export const setFilteredByOrder = () => ({ type: SET_FILTERED_BY_ORDER });
