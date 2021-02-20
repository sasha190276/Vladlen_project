import React from 'react';

const SearchBar = (props) => {
  const { filterText, inStockOnly, handleInStockChange, handleFilterTextChange } = props;
  // const { inStockOnly } = { props };
  // const handleFilterTextChange = (e) => console.log(e);
  return (
    <form>
      <p>SearchBar</p>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input type="checkbox" checked={inStockOnly} onChange={handleInStockChange} />
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
