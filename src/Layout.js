import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Layout = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>
      {React.cloneElement(children, { isMobile })}
    </div>
  );
};

export default Layout;
