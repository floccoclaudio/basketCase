import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { addToInventory } from './features/itemSlice';
import { useDispatch } from 'react-redux';

import Navbar from './Navbar';
import ItemList from './ItemList';
import Basket from './Basket';

//#region - harcoded items
const inventory = [
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
    stock: 1,
  },
  {
    label: 'headphones',
    price: 60,
    id: 'headphonesID',
    stock: 0,
  },
  {
    label: 'laptop',
    price: 250,
    id: 'laptopID',
    stock: 5,
  },
];
//#endregion

//on the first render put all the items in the inventory ans save it to item variables


const App = () => {
  useEffect(() => {
    //for every obj of inventory array dispatch addToInventory in the store
    const items = inventory.map((item) => dispatch(addToInventory(item)))
  }, [])
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
