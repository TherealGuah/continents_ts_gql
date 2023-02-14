//TODO: passar tudo po component acima...

function CountryData(props: any): JSX.Element {
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
            <h2>Country Name: {name}</h2>
            <p>International Code (AF): {code}</p>
            <p>Native Name: {native}</p>
            <p>Telephone Code: +{phone}</p>
            {/*<p>{continent}</p>*/}
            <p>Capital: {capital}</p>
            <p>Currency: {currency}</p>

            <p>Flag emoji: {emoji}</p>
        </>
    );
}

export default CountryData;