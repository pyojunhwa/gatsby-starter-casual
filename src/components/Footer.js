import React from 'react';
import {Link} from "gatsby";

export default function Footer() {
  return (
    <footer className="footer text-center py-5">
      <div className="container">
          <ul style={{ flexDirection:"row"}} className=" mx-auto">
              <p className="m-0" style={{color:"#ffffff"}}>Freizeitanlage - Kaspelwerder</p>
                  <Link
                      className="nav-link"
                      to="/"
                      style={{textDecoration:"none",color:"#ffffff"}}
                  >
                      Startseite
                  </Link>
                  <Link
                      className="nav-link"
                      to="/about"
                      style={{textDecoration:"none",color:"#ffffff"}}
                  >
                      Angebote
                  </Link>
                  <Link
                      style={{textDecoration:"none",color:"#ffffff"}}
                      className="nav-link"
                      to="/products"
                  >
                      Anfahrt und Öffnungszeiten
                  </Link>
                  <Link style={{textDecoration:"none",color:"#ffffff"}}
                      className="nav-link"
                      to="/store"
                  >
                      Impressum & Datenschutz
                  </Link>
          </ul>
      </div>
    </footer>
  );
}
