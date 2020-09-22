// import React from 'react';
import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom'

//First solution importing a local json file
// import Countries from './countries.json';

//Second solution using an external API
// import axios from 'axios'

import DisplayCountries from './components/DisplayCountries'
import DisplayCountryDetails from './components/DisplayCountryDetails'
import './App.css';


const App = () => {

//Second solution: using hooks to fetch Api data and set state  
const [Countries, setCountries] = useState([])

useEffect(()=>{

  //Solution a: using axios
  // const getData = async () => {
  //   let res = await axios.get('https://countries.tech-savvy.tech/countries')
  //   console.log(res)
  //   setCountries(res.data)
  // }
  // getData()

  //Solution b: using fetch
  fetch('https://countries.tech-savvy.tech/countries')
  .then(res => res.json())
  // .then(json => console.log(json))
  .then(json => setCountries(json))
}
,[])

  return (
    <div className="App">
    <h1>Wiki Countries</h1>
    {/* I'm passing the imported file Countries as a prop to DisplayCountries react child element */}
    <DisplayCountries countries={Countries}/>
    <Switch>
    {/* I'm passing react-router-dom's props to the component DisplayCountryDetails. 
    These are history, location and match. Inside match there is params, that has an ID. 
    This ID is helpfull to match the element with other element with the same ID.  
    You have to specify the path /:id that is chaging and taking each id as part of the url*/}
    <Route path='/:id' render={(props) => <DisplayCountryDetails {...props}/> }/>
    </Switch>
    </div>
  );
}

export default App;
