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
            <div className="overflow-hidden bg-white shadow sm:rounded-lg mb-8">
                <div className="px-4 py-5 sm:px-6">
                    <h1 className="text-4xl font-medium leading-6 text-gray-900">Country Details</h1>
                </div>

                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-medium font-medium text-gray-500">Country Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{name}</dd>
                        </div>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-medium font-medium text-gray-500">International Code</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{code}</dd>
                        </div>

                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-medium font-medium text-gray-500">Native Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{native}</dd>
                        </div>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-medium font-medium text-gray-500">Telephone Code</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">+ {phone}</dd>
                        </div>

                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-medium font-medium text-gray-500">Continent</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{continent ? continent.name : ''}</dd>
                        </div>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-medium font-medium text-gray-500">Capital</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{capital}</dd>
                        </div>

                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-medium font-medium text-gray-500">Currency</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{currency}</dd>
                        </div>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-medium font-medium text-gray-500">Languages</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul>
                                    {languages ? languages.map( (lang, index) => <li key={index}>{lang.name}</li>) : ''}
                                </ul>
                            </dd>
                        </div>

                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-medium font-medium text-gray-500">Flag</dt>
                            <dd className="mt-1 text-4xl text-gray-900 sm:col-span-2 sm:mt-0">{emoji}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    );
};

export default CountryData;