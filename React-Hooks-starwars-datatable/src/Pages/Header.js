import React, { useContext } from 'react';
import { StarWarsContext } from '../context/index';

function geratedlistOfColumns() {
  return ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
}

function generateFilteredColumns(listOfColumns, columns) {
  return listOfColumns
    .filter((col) => !columns.includes(col))
    .map((column) => (
      <option key={column} value={column}>
        {column}
      </option>
    ));
}

function generateFilteredValues(listOfComparisons) {
  return listOfComparisons.map((comparison) => (
    <option key={comparison} value={comparison}>
      {comparison}
    </option>
  ));
}

function generateNewFilter() {
  const newFilter = {
    column: document.querySelector('#column').value,
    comparison: document.querySelector('#comparison').value,
    value: document.querySelector('#value').value,
  };
  return newFilter;
}

function renderFilterDropdown(setVariables, setFilteredPlanets, filtersList) {
  const listOfColumns = geratedlistOfColumns();
  const listOfComparisons = ['maior que', 'menor que', 'igual a'];
  const columns = filtersList.map((filter) => filter.column);
  return (
    <div className="filtersContainer">
      <h4>Definir filtro:</h4>
      <select data-testid="column-filter" id="column">
        <option defaultValue>Coluna</option>
        {generateFilteredColumns(listOfColumns, columns)}
      </select>
      <select data-testid="comparison-filter" id="comparison">
        <option defaultValue>Comparação</option>
        {generateFilteredValues(listOfComparisons)}
      </select>
      <input data-testid="value-filter" type="number" id="value" />
      <button
        data-testid="button-filter"
        type="button"
        onClick={() => {
          setVariables(generateNewFilter());
        }}
      >
        Filtrar
      </button>
    </div>
  );
}

function renderFiltersSetted(filtersList, removeFilter) {
  return (
    <div className="filtersContainer">
      <h4>Filtros:</h4>
      {filtersList.map((filter) => (
        <div className="cardFilters" key={filter.column} data-testid="filter">
          <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
          <button
            type="button"
            onClick={() => {
              removeFilter(filter);
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

function renderFiltersOrder(planetsData, setOrder, setFilteredPlanetsByOrder) {
  const columns = Object.keys(planetsData[0]);
  return (
    <div>
      <h3>Ordenar:</h3>
      <select data-testid="column-sort" id="column-sort">
        {columns
          .filter((title) => title !== 'residents')
          .map((title) => (
            <option key={title}>{title}</option>
          ))}
      </select>
      <div>
        <input data-testid="column-sort-input" id="ASC" name="column" type="radio" value="ASC" />
        <label htmlFor="ASC">ASC</label>
        <input data-testid="column-sort-input" id="DESC" name="column" type="radio" value="DESC" />
        <label htmlFor="DESC">DESC</label>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={() => {
            const selectSort = document.querySelector('input[name="column"]:checked').value;
            const selectColumn = document.querySelector('#column-sort').value;
            const order = {
              column: selectColumn,
              sort: selectSort,
            };
            setOrder(order);
            setFilteredPlanetsByOrder();
            // this.forceUpdate();
          }}
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

function Header() {
  const context = useContext(StarWarsContext);
  const {
    state,
    setFilterByName,
    setVariables,
    setFilteredPlanets,
    removeFilter,
  } = context;
  const {
    // chaves do estado
    isFetching,
    data,
    filterByNumericValues,
    // funçoes que alteram o estado
    setOrder,
    setFilteredPlanetsByOrder,
  } = state;

  if (isFetching) return <p>Loading...</p>;
  return (
    <div>
      <div className="container">
        <h4>Procurar:</h4>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(e) => {
            setFilterByName(data, e.target.value);
          }}
        />
        {renderFilterDropdown(setVariables, setFilteredPlanets, filterByNumericValues)}
        {renderFiltersOrder(data, setOrder, setFilteredPlanetsByOrder)}
      </div>
      {renderFiltersSetted(filterByNumericValues, removeFilter, setFilteredPlanets)}
    </div>
  );
}

export default Header;
