import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowHeader = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (location.pathname === '/login') {
      setShowNavbar(false);
    }else if(location.pathname === '/siteengdash'){
      setShowNavbar(false)
    }else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default ShowHeader;
