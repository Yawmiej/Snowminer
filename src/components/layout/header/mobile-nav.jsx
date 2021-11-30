import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../common/button';
import { MobileOnly } from '../container/responsive';

function MobileNav() {
  const [showNav, setShowNav] = useState(false);

  const toggle = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <MobileOnly>
      <button className={`menu-icon${showNav ? ' open' : ''}`} onClick={toggle}>
        <span className={`menu-icon__line${showNav ? ' open' : ''}`} />
      </button>
      <div className="mobile-nav--bg" />
      <nav className="mobile-nav">
        <div className="mobile-nav__content">
          <ul>
            <li>
              <NavLink to="/" onClick={toggle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/drive" onClick={toggle}>
                Drive
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={toggle}>
                Help
              </NavLink>
            </li>
          </ul>
          <Button theme="blue" color="white" className="content-button">
            Contact Us
          </Button>
        </div>
      </nav>
    </MobileOnly>
  );
}

export default MobileNav;
