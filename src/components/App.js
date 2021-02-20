// First REACT application

import React from 'react';
// import im from '../img/dog.jpg';
// import im2 from '../img/dogsad.jpg';
import './styles/App.scss';
import FilterableProductTable from './FilterableProductTable';

const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  {
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'Nexus 7',
  },
];
const App = () => (
  <div>
    <h1>My React App!</h1>
    <FilterableProductTable products={PRODUCTS} />
  </div>
);

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>My React App!</h1>
//         <img alt={im} src={im} />
//         <img alt={im} src={im2} />
//       </div>
//     );
//   }
// }

export default App;
