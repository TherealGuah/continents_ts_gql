interface continentsJson {
    data: {
        continents: [];
    }
}

export const fetchContinents = async (): Promise<continentsJson> => {

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


// --- fetch for countries ---
interface countriesJson {
    data: {
        continent: {
            countries: []
        }
    }
}
export const fetchCountriesByContinent = async (continentCode: string): Promise<countriesJson> => {

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: `{ continent(code: "${continentCode}") { countries { name currency capital languages { name } }}}` }),
    };

    const response = await fetch('https://countries.trevorblades.com/', settings);

    if (!response.ok) {
        throw new Error();
    }
    return await response.json();
};