interface ContinentsData {
    data: {
        continents: []
    }
}

export const fetchContinents = async (): Promise<ContinentsData> => {

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: '{ continents { name code }}'}),
    };
    const response = await fetch('https://countries.trevorblades.com/', settings);

    if (!response.ok) {
        throw new Error();
    }
    return await response.json();
};

interface CountriesByContinentData {
    data: {
        continent: {
            countries: []
        }
    }
}
export const fetchCountriesByContinent = async (continentCode: string): Promise<CountriesByContinentData> => {

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: `{ continent(code: "${continentCode}") { countries { code name currency capital languages { name } }}}` }),
    };

    const response = await fetch('https://countries.trevorblades.com/', settings);

    if (!response.ok) {
        throw new Error();
    }
    return await response.json();
};

interface CountryData {
    data: {
        country: []
    }
}
export const fetchCountryByCode = async (countryCode: string|undefined): Promise<CountryData> => {

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: `{ country(code: "${countryCode}") { code name native phone continent {name} capital currency languages {name} emoji emojiU }}` }),
    };

    const response = await fetch('https://countries.trevorblades.com/', settings);

    if (!response.ok) {
        throw new Error();
    }
    return await response.json();
};