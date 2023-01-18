
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
            <h2>{name}</h2>
        </>
    );
}

export default CountryData;