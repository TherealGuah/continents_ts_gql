import React, {useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';
import { fetchCountryByCode } from '../../API/apiRequests';

function Country(): JSX.Element {
    interface Country {
        code: string,
        name: string,
        native: string,
        phone: string,
        continent: {
            name: string
        },
        capital: string,
        currency: string,
        languages: {
            name: string
        },
        emoji: string,
        emojiU: string
    }

    const [country, setCountry] = useState<Country>();
    const {countryCode} = useParams();

    useEffect(() => {

        fetchCountryByCode(countryCode)
            .then(response => {
                setCountry(response.data.country);
            })
            .catch(err => err.message = 'Error! Could not resolve promise.');
    },[]);

    return  (
      <>
          <Link to={'/'}>
              <button>Back to Continents</button>
          </Link>
      </>
    );
}

export default Country;