import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Countries from './countries.json';
import DisplayCountries from './components/DisplayCountries'
import DisplayCountryDetails from './components/DisplayCountryDetails'
import './App.css';


const App = () => {

  return (
    <div className="App">
    <h1>Wiki Countries</h1>
    <DisplayCountries countries={Countries}/>
    <Switch>
    <Route path='/:id' render={(props) => <DisplayCountryDetails {...props}/> }/>
    </Switch>
    </div>
  );
}

export default App;
