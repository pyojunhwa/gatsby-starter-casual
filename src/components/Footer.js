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
                        style="text-decoration:none"
                  >
                      Startseite
                  </Link>
                  <Link
                      className="nav-link"
                      to="/about"
                      color="fff"
                      style="text-decoration:none"
                  >
                      Angebote
                  </Link>
                  <Link
                      className="nav-link"
                      to="/products"
                      color="fff"
                      style="text-decoration:none"
                  >
                      Anfahrt und Öffnungszeiten
                  </Link>
                  <Link
                      className="nav-link"
                      to="/store"
                      color="fff"
                      style="text-decoration:none"
                  >
                      Impressum & Datenschutz
                  </Link>
          </ul>
      </div>
    </footer>
  );
}
