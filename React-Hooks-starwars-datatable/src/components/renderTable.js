import React from 'react';
import PropTypes from 'prop-types';


export default function renderTable({ tableHeaderTitles, filteredPlanets }) {
  return (
    <table>
      <thead>
        <tr>
          {tableHeaderTitles
            .filter((title) => title !== 'residents')
            .map((title) => (
              <th key={title}>{title}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet)
              .filter((_, index) => index !== 9)
              .map((value) => (
                <td key={value}>{value}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

renderTable.propTypes = {
  filteredPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableHeaderTitles: PropTypes.func.isRequired,
};
