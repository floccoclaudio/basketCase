import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ItemList from './ItemList';
import Basket from './Basket';
//harcoded items
const items = [
  {
    label: 'mouse',
    price: 10,
    id: 'mouseID',
    stock: 15,
  },
  {
    label: 'keyboard',
    price: 15,
    id: 'keyboardID',
    stock: 20,
  },
  {
    label: 'headphones',
    price: 60,
    id: 'headphonesID',
    stock: 10,
  },
  {
    label: 'laptop',
    price: 250,
    id: 'laptopID',
    stock: 5,
  },
];

console.log(items);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <ItemList items={items} />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="*">{/* error component */}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
