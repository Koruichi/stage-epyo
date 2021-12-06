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
import InventoryProgram from'./InventoryProgram';
import DDHistoryInventory from './DDHistoryInventory';


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

        <Route exact path="/HistoryInventory">
          <DDHistoryInventory/>
        </Route>
        
        <Route exact path="/inventoryProgram">
          <InventoryProgram/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
