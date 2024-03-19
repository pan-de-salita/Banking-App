import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DepositForm from './DepositForm';
import DepositDetails from './DepositDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Deposit Money</h1>
        <Switch>
          <Route exact path="/" component={DepositForm} />
          <Route path="/deposit-details" component={DepositDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
