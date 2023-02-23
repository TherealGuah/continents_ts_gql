import React, {useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';
import { fetchCountryByCode } from '../../API/apiRequests';
import CountryData from '../CountryData';

function Country(): JSX.Element {

    const [country, setCountry] = useState([]);
    const {countryCode} = useParams();

    useEffect(() => {

        fetchCountryByCode(countryCode)
            .then(response => {
                setCountry(response.data.country);
            })
            .catch(err => err.message = 'Error! Could not resolve promise.');
    }, [countryCode]);

    return  (
        <>
            {/*@ts-ignore*/}
            <CountryData country={country}/>
            <Link to={'/'}
                  className="m-6 mt-8 rounded-md bg-sky-400 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Back to Continents
            </Link>
        </>
    );
}

export default Country;