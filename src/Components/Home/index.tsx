import Continent from "../Continent/index";
import CountryCard from "../CountryCard/index";
import React, {useEffect, useState} from "react";
import {fetchContinents, fetchCountriesByContinent} from "../../API/apiRequests";

function Home(): JSX.Element {

    const [continents, setContinents] = useState([]);
    const [countries, setCountries] = useState([]);
    const [continentCode, setContinentCode] = useState('');

    useEffect(() => {
        fetchContinents()
            .then(response => setContinents(response.data.continents))
            .catch(err => err.message = 'Error! Could not resolve promise.');
    },[]);

    useEffect(() => {
        fetchCountriesByContinent(continentCode)
            .then( response => {
                setCountries(response.data.continent.countries)
            })
            .catch(err => err.message = 'Error! Could not resolve promise.');
    },[continentCode]);

    const handleContinentChange = (ev: any): void => {
        ev.preventDefault();
        setContinentCode(ev.target.value);
    };

    return (
        <div className="App">

            <div className="border-b-2 mx-8">
                <h1 className="text-4xl font-black py-8">Countries by Continent</h1>
            </div>

            <div className="flex flex-row mx-8 py-8">
                <div className="w-1/5 mr-16" >
                    <ul className="border-b-2  flex flex-col justify-between ">
                        {
                            continents.map( (continent, index) => <Continent key={index} continent={continent} handleContinentChange={handleContinentChange}/>)
                        }
                    </ul>
                </div>

                <div className="border-radius-4 border-4 rounded w-4/5 flex flex-wrap justify-between bg-gray-100/75">
                    {
                        countries.map( (country, index) => <CountryCard key={index} country={country} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;