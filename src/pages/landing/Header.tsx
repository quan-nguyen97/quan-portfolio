import React, { useEffect, useState } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.scss';

const Header = () => {
  const [headerPosition, setHeaderPosition] = useState('center');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setHeaderPosition('center');
    } else {
      setHeaderPosition('top');
    }
  }, [pathname]);

  return (
    <header id="header" className={`header-${headerPosition}`}>
      <div className="container">
        <h1>
          <Logo width={60} height={60} className="me-3" />
          <a>Quan Nguyen</a>
        </h1>
        <h2>
          Passionated <span>Software Engineer</span> from Berlin
        </h2>
        <Navbar variant="dark">
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
        </Navbar>

        <div className="social-links">
          <a href="#">
            <Envelope />
          </a>
          <a href="#">
            <Github />
          </a>
          <a href="#">
            <Linkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
