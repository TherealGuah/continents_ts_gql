import React from 'react';
import {Link} from 'react-router-dom';
function PageNotFound(): JSX.Element {
    return  (
        <div>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to={'/'}>Back to Home Page</Link>
        </div>
    );
};

export default PageNotFound;