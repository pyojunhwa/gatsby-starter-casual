import React from 'react';
import {Link} from "gatsby";

export default function Footer() {
  return (
    <footer className="footer text-center py-5">
      <div className="container">
          <p className="m-0" style={{color:"#ffffff"}}>Freizeitanlage - Kaspelwerder</p>
          <div className="flex-row mx-auto">
                  <Link
                      to="/"
                      style={{textDecoration:"none",color:"#ffffff"}}
                  >
                      Startseite
                  </Link>
              <div><p style={{color:"#ffffff"}}> | </p></div>
                  <Link
                      to="/about"
                      style={{textDecoration:"none",color:"#ffffff"}}
                  >
                      Angebote
                  </Link>
              <div><p style={{color:"#ffffff"}}> | </p></div>
                  <Link
                      style={{textDecoration:"none",color:"#ffffff"}}
                      to="/products"
                  >
                      Anfahrt & Öffnungszeiten
                  </Link>
              <div><p style={{color:"#ffffff"}}> | </p></div>
                  <Link style={{textDecoration:"none",color:"#ffffff"}}
                      to="/store"
                  >
                      Impressum & Datenschutz
                  </Link>
          </div>
      </div>
    </footer>
  );
}
