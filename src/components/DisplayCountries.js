import React from 'react';
import { Link } from 'react-router-dom'

const DisplayCountries = (props) => {
  console.log(props)
  let countries = props.countries.map(each => {
    return <li key={each.cca2}><Link to={`/${each.cca3}`}>{each.flag} {each.name.common}</Link></li>
  })
  return countries
}

export default DisplayCountries;