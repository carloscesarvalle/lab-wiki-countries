import React from 'react';
import Countries from '../countries.json';
import { Link } from 'react-router-dom'

const DisplayCountryDetails = (props) => {
    console.log(props)
    let matchCountry = Countries.find((each) => 
        each.cca3 === props.match.params.id)
    return (
        <div>
            <h1>Capital {matchCountry.name.official}</h1>
            <p>Area {matchCountry.area}</p>
            <p>Borders {matchCountry.borders.map((each,i) => {
                return <Link to={`/${each}`}>
                        <li key={`key ${each[i]}`}>{each}</li>
                        </Link>})}
            </p>
        </div>
    );
};

export default DisplayCountryDetails;