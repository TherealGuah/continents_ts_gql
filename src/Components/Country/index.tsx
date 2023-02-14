import React, {useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';
import { fetchCountryByCode } from '../../API/apiRequests';
import CountryData from '../CountryData/index';

function Country(): JSX.Element {

    const [country, setCountry] = useState([]);
    const {countryCode} = useParams();

    useEffect(() => {

        fetchCountryByCode(countryCode)
            .then(response => {
                setCountry(response.data.country);
            })
            .catch(err => err.message = 'Error! Could not resolve promise.');
    }, []);

    console.log(country);

    return  (
      <>
          <CountryData country={country}/>
          <Link to={'/'}>
              <button>Back to Continents</button>
          </Link>
      </>
    );
}

export default Country;