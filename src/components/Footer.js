import React from 'react';
import {Link} from "gatsby";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">

          <li className="mx-auto">
              <p className="m-0" color="fff">Freizeitanlage - Kaspelwerder</p>
              <Link className="nav-link"
                        to="/"
                        color="fff"
                  >
                      Startseite
                  </Link>
                  <Link
                      className="nav-link"
                      to="/about"
                      color="fff"
                  >
                      Angebote
                  </Link>
                  <Link
                      className="nav-link"
                      to="/products"
                      color="fff"
                  >
                      Anfahrt und Öffnungszeiten
                  </Link>
                  <Link style={{ textDecoration: 'none' }}
                      className="nav-link"
                      to="/store"
                      color="fff"
                  >
                      Impressum & Datenschutz
                  </Link>
          </li>
      </div>
    </footer>
  );
}
