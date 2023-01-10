import {Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Country from './Components/Country/Country';

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="countries/:countryId" element={<Country />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;

