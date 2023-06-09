import React, { useEffect, useState } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Envelope, Github, Linkedin, List, X } from 'react-bootstrap-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.scss';
import classNames from 'classnames';

const Header = () => {
  const [headerPosition, setHeaderPosition] = useState('center');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setHeaderPosition('center');
    } else {
      setHeaderPosition('top');
    }
    setMobileNavOpen(false);
  }, [pathname]);

  return (
    <header id="header" className={`header-${headerPosition}`}>
      <div className="container">
        <h1>
          <NavLink to="/">
            <Logo width={60} height={60} className="me-3" />
            <a>Quan Nguyen</a>
          </NavLink>
        </h1>

        <h2>
          Passionated <span>Software Engineer</span> from Berlin
        </h2>
        <Navbar
          variant="dark"
          className={classNames({
            'navbar-mobile': mobileNavOpen,
          })}
        >
          <Nav as="ul">
            <NavItem as="li">
              <Nav.Link as={NavLink} to="/" className="ps-0">
                Home
              </Nav.Link>
            </NavItem>

            <NavItem as="li">
              <Nav.Link as={NavLink} to="/about" className="ps-0">
                About
              </Nav.Link>
            </NavItem>

            <NavItem as="li">
              <Nav.Link as={NavLink} to="/resume" className="ps-0">
                Resume
              </Nav.Link>
            </NavItem>

            <NavItem as="li">
              <Nav.Link as={NavLink} to="/contact" className="ps-0">
                Contact
              </Nav.Link>
            </NavItem>
          </Nav>
          {mobileNavOpen ? (
            <X
              className="mobile-nav-toggle"
              onClick={() => setMobileNavOpen(false)}
            />
          ) : (
            <List
              className="mobile-nav-toggle"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            />
          )}
        </Navbar>

        <div className="social-links">
          <a href="mailto:hquan.nguyen1997@gmail.com" target="_blank">
            <Envelope />
          </a>
          <a href="https://github.com/quan-nguyen97" target="_blank">
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/hong-quan-nguyen-a5333017b/"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
