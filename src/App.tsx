import {Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import PageNotFound from "./Components/PageNotFound";
import Country from "./Components/Country";

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="countries/:countryCode" element={<Country />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;

