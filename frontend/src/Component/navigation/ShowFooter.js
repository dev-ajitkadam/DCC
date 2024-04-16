import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowFooter = ({ children }) => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    if (location.pathname === '/login') {
      setShowFooter(false);
    }else if(location.pathname === '/siteengdash'){
      setShowFooter(false)
    }else if(location.pathname === '/admindash'){
      setShowFooter(false)
    }else if(location.pathname === '/managerdash'){
      setShowFooter(false)
    }else if(location.pathname === '/clientdash'){
      setShowFooter(false)
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return <div>{showFooter && children}</div>;
};

export default ShowFooter;
