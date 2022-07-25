import React from 'react';
import {Link} from "gatsby";

export default function Footer() {
  return (
    <footer className="footer text-center py-5">
      <div className="container">
        <p className="m-0" color="fff">Freizeitanlage - Kaspelwerder</p>
          <ul className=" mx-auto">
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
                  <Link
                      className="nav-link"
                      to="/store"
                      color="fff"
                  >
                      Impressum & Datenschutz
                  </Link>
          </ul>
      </div>
    </footer>
  );
}
