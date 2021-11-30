import React from 'react';
import Image from '../../common/image';
import Container from '../container/container';

import './style.scss';

import Logo1x from '../../../assets/img/png/1x/Logotype.png';
import Logo2x from '../../../assets/img/png/2x/Logotype.png';
import { Link, NavLink } from 'react-router-dom';
import Button from '../../common/button';
import MobileNav from './mobile-nav';

function Header() {
  return (
    <div className="header">
      <Container>
        <div className="header__content">
          <div className="header__content--left">
            <div className="logo">
              <Link to="/">
                <Image
                  src1x={Logo1x}
                  src2x={Logo2x}
                  alt="Logo"
                  className="logo__image"
                />
              </Link>
            </div>
          </div>
          <div className="header__content--right">
            <MobileNav />
            <nav className="nav">
              <ul>
                <li>
                  <NavLink to="/schedule" className="nav__link active">
                    Schedule
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/drive" className="nav__link">
                    Drive
                  </NavLink>
                </li>
                <li>
                  <NavLink to="help" className="nav__link">
                    Help
                  </NavLink>
                </li>
              </ul>
              <Button variant="solid" theme="white" className="nav__button">
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
