import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
function Country(): JSX.Element {
    useEffect(() => {
        // TODO: Mount the selected country by code
    },[])
    return  (
      <>
          <Link to={'/'}>
              <button>Back to Continents</button>
          </Link>
      </>
    );
}

export default Country;