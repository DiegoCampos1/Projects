import React, { useContext } from 'react';
import RenderTable from '../components/renderTable';
import { StarWarsContext } from '../context/index';

function Table() {
  const context = useContext(StarWarsContext);
  const { state } = context;

  const { data, isFetching, filteredPlanets } = state;

  if (isFetching) return <p>Loading...</p>;
  const headerTitles = data ? Object.keys(data[0]) : [];
  return <RenderTable tableHeaderTitles={headerTitles} filteredPlanets={filteredPlanets} />;
}

// const mapStateToProps = (state) => ({
//   planetsData: state.filters.planetsData,
//   isFetching: state.filters.isFetching,
//   filteredPlanets: state.filters.filteredPlanets,
//   nameToFilter: state.filters.filterByName.name,
//   filterByNumericValues: state.filters.filterByNumericValues,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchPlanets: () => dispatch(fetchPlanets()),
// });

export default Table;
// Table.propTypes = {
//   planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
//   fetchPlanets: PropTypes.func.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   filteredPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
