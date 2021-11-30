import React from 'react';
import Header from './header';

function Layout({ component: Component, headerTheme, ...rest }) {
  return (
    <>
      <Header theme={headerTheme} />
      <Component {...rest} />
    </>
  );
}

export default Layout;
