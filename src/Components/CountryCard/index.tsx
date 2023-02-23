import { Link } from 'react-router-dom';

interface CountryJson {
    country: {
        code: string,
        name: string,
        capital: string,
        currency: string,
        languages: [
            {
                name: string
            }
        ]
    }
}

const CountryCard = (props: CountryJson): JSX.Element => {

    const { code, name, capital, currency, languages} = props.country;

    return (
        <Link to={`/countries/${code}`}>
            <div className="p-8 m-4 shadow-xl rounded-lg  hover:bg-sky-400/75 hover:text-white hover:font-medium">
                <h3 className="font-bold">{name}</h3>
                <p>{languages[0] ? languages[0].name : ''}</p>
                <p>{capital ? capital : ''}</p>
                <p>{currency ? currency : ''}</p>
            </div>
        </Link>
    );
};

export default CountryCard;