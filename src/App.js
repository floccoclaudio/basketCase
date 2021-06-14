import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import ItemList from './ItemList';
import Basket from './Basket';

//on the first render put all the items in the inventory ans save it to item variables

const App = () => {
  //selector state e prende state dello slice interessato alias state.nomeSliceReducer poiche nel rootreducer l abbiamo assegnato al nome inventory
  const items = useSelector((state) => state.inventory);
  console.log(items);
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
