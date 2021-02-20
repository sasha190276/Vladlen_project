import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
  }

  render() {
    const { filterText, inStockOnly } = this.state;
    const { products } = this.props;
    const handleInStockChange = (e) =>
      this.setState({
        inStockOnly: e.target.checked,
      });
    const handleFilterTextChange = (e) => this.setState({ filterText: e.target.value });
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          handleFilterTextChange={handleFilterTextChange}
          handleInStockChange={handleInStockChange}
        />
        <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
      </div>
    );
  }
}

export default FilterableProductTable;
