import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'gatsby';
import logo from "../assets/img/logo/Kaspelwerder-Logo_v01/PNG/KW_adler-weiÃ.png";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu } = this.state;
    const { activeLink } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a
            className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
            href="/#"
          >
            {config.siteTitle}
          </a>

          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler  ${openMenu ? '' : 'collapsed'}`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >

            <ul className="navbar-nav text-center mx-auto">
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'startseite' ? 'active' : ''
                }`}
              >
                <Link className="nav-link text-uppercase text-expanded" to="/">
                  <img src={logo} alt="Logo" style={{height: 25}}/>
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'angebote' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/angebote"
                >
                  Angebote
                </Link>
              </li>
              <li
                  className={`nav-item px-lg-4 ${
                      activeLink === 'preise' ? 'active' : ''
                  }`}
              >
                <Link className="nav-link text-uppercase text-expanded" to="/preise">
                  Preise
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'anfahrt' ? 'active' : ''
                }`}
              >

                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/anfahrt"
                >
                  Anfahrt & Öffnungszeiten
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'impressum' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/impressum"
                >
                  Impressum & Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
