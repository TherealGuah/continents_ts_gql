interface ContinentData {
    continent: {
        name: string,
        code: string
    }

    handleContinentChange: (ev: any) => void;
}
const Continent = (props: ContinentData): JSX.Element => {

    const { name, code} = props.continent;

    return(
        <li className="mb-4 hover:font-bold hover:bg-sky-400/75 hover:text-white shadow-lg rounded-lg">
            <button className="w-full px-2 py-1" onClick={props.handleContinentChange} value={code}>{name}</button>
        </li>
    );
};

export default Continent;