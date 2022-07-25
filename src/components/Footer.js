import React from 'react';
import {Link} from "gatsby";

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0" color="fff">Freizeitanlage - Kaspelwerder</p>
          <ul className="text-center mx-auto">
                  <Link className="nav-link text-uppercase text-expanded" to="/">
                      Startseite
                  </Link>
                  <Link
                      className="nav-link text-uppercase text-expanded"
                      to="/about"
                  >
                      Angebote
                  </Link>
                  <Link
                      className="nav-link text-uppercase text-expanded"
                      to="/products"
                  >
                      Anfahrt und Öffnungszeiten
                  </Link>
                  <Link
                      className="nav-link text-uppercase text-expanded"
                      to="/store"
                  >
                      Impressum & Datenschutz
                  </Link>
          </ul>
      </div>
    </footer>
  );
}
