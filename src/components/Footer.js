import React from 'react';
import {Link} from "gatsby";

export default function Footer() {
  return (
    <footer className="footer text-center py-5">
      <div className="container">
          <ul>
              <p className="m-0" color="#ffffff">Freizeitanlage - Kaspelwerder</p>
                  <Link className="nav-link"
                        to="/"
                        color="#ffffff"
                  >
                      Startseite
                  </Link>
                  <Link
                      className="nav-link"
                      to="/about"
                      color="#ffffff"
                  >
                      Angebote
                  </Link>
                  <Link
                      className="nav-link"
                      to="/products"
                      color="#ffffff"
                  >
                      Anfahrt und Öffnungszeiten
                  </Link>
                  <Link
                      className="nav-link"
                      to="/store"
                      color="#ffffff"
                  >
                      Impressum & Datenschutz
                  </Link>
          </ul>
      </div>
    </footer>
  );
}
