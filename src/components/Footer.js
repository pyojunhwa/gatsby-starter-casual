import React from 'react';
import {Link} from "gatsby";

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0" color="fff">Freizeitanlage - Kaspelwerder</p>

          <ul className="navbar-nav text-center mx-auto">
              <li
                  className={`nav-item px-lg-4 ${
                      activeLink === 'home' ? 'active' : ''
                  }`}
              >
                  <Link className="nav-link text-uppercase text-expanded" to="/">
                      Startseite
                  </Link>
              </li>
              <li
                  className={`nav-item px-lg-4 ${
                      activeLink === 'about' ? 'active' : ''
                  }`}
              >
                  <Link
                      className="nav-link text-uppercase text-expanded"
                      to="/about"
                  >
                      Angebote
                  </Link>
              </li>
              <li
                  className={`nav-item px-lg-4 ${
                      activeLink === 'products' ? 'active' : ''
                  }`}
              >
                  <Link
                      className="nav-link text-uppercase text-expanded"
                      to="/products"
                  >
                      Anfahrt und Öffnungszeiten
                  </Link>
              </li>
              <li
                  className={`nav-item px-lg-4 ${
                      activeLink === 'store' ? 'active' : ''
                  }`}
              >
                  <Link
                      className="nav-link text-uppercase text-expanded"
                      to="/store"
                  >
                      Impressum & Datenschutz
                  </Link>
              </li>
          </ul>
      </div>
    </footer>
  );
}
