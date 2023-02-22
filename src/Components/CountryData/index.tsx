interface Country {
    country: {
        code: string,
        name: string,
        native: string,
        phone: string,
        continent: {
            name: string
        },
        capital: string,
        currency: string,
        languages: [
            {
                name: string
            }
        ],
        emoji: string
    }
}

function CountryData(props: Country): JSX.Element {

    const {
        code,
        name,
        native,
        phone,
        continent,
        capital,
        currency,
        languages,
        emoji
    } = props.country;

    return (
        <>
            <p>Name: {name}</p>
            <p>International Code (AF): {code}</p>
            <p>Native Name: {native}</p>
            <p>Telephone Code: +{phone}</p>
            <p>Continent: {continent ? continent.name : ''}</p>
            <p>Capital: {capital}</p>
            <p>Currency: {currency}</p>
            <p>Languages:</p>
            <ul>
                {languages ? languages.map( (lang, index) => <li key={index}>{lang.name}</li>) : ''}
            </ul>
            <p>Flag: {emoji}</p>
        </>
    );
};

export default CountryData;