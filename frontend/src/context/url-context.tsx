import React, { useEffect, useState } from "react";
import axios from 'axios';

const urls = {
    getAllPoliciesUrl: 'https://policy-api-dot-surya-systems.uc.r.appspot.com/policies/',
    createPoliciesUrl: 'https://policy-api-dot-surya-systems.uc.r.appspot.com/policies/',
  };

  export const UrlContext = React.createContext(null);

  export default function UrlProvider({ children }){
    const [state, setState] = useState(urls);
    return <UrlContext.Provider value={state}>
        {children}
    </UrlContext.Provider>
  }