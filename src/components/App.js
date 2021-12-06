import React, { } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home'
import Robot from './Robot'
import Register from './Register';
import CRMission from './CRMission';
import InventoryDetails from './InventoryDetails';
import Photo from './Photo';

const App = () => {
  const isConnected = localStorage.getItem('isConnected') === 'true';
  return (
    <div className="app">
      <Switch>

        <Route exact path="/">
          {isConnected ? <Robot /> : <Home />}
        </Route>

        <Route exact path="/createAccount">
          <Register />
        </Route>

        <Route exact path="/detailData">
          <CRMission />
        </Route>

        <Route path="/recipe/:nomproduit">
        </Route>

        <Route exact path="/inventoryDetails">
          <InventoryDetails />
        </Route>

        <Route exact path="/photo">
          <Photo />
        </Route>

        <Route>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
