import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPlanets from '../actions/fetchPlanets';
import RenderTable from './renderTable';
import './table.css';

// function renderTable(tableHeaderTitles, filteredPlanets) {
//   return (
//     <table>
//       <thead>
//         <tr>
//           {tableHeaderTitles
//             .filter((title) => title !== 'residents')
//             .map((title) => (
//               <th key={title}>{title}</th>
//             ))}
//         </tr>
//       </thead>
//       <tbody>
//         {filteredPlanets.map((planet) => (
//           <tr key={planet.name}>
//             {Object.values(planet)
//               .filter((_, index) => index !== 9)
//               .map((value) => (
//                 <td key={value}>{value}</td>
//               ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

class Table extends Component {
  componentDidMount() {
    const { fetchPlanets: fetch } = this.props;
    fetch();
  }

  test() {
    const { filteredPlanets } = this.props;
    return filteredPlanets;
  }

  render() {
    const { planetsData, filteredPlanets, isFetching } = this.props;
    if (isFetching) return <p>Loading...</p>;
    const headerTitles = planetsData ? Object.keys(planetsData[0]) : [];
    return <RenderTable tableHeaderTitles={headerTitles} filteredPlanets={filteredPlanets} />;
  }
}

const mapStateToProps = (state) => ({
  planetsData: state.filters.planetsData,
  isFetching: state.filters.isFetching,
  filteredPlanets: state.filters.filteredPlanets,
  nameToFilter: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  filteredPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
