import React from 'react';

const SearchBar = ({changeFilter, sort, changeSort}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={sort === "Alphabetically"} onChange={(e) => changeSort(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={sort === "Price"} onChange={(e) => changeSort(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => changeFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          <option value="All">All</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
