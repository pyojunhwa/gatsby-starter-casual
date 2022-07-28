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
                      style={{textDecoration:"none",color:"#ffffff",padding:"12px"}}
                  >
                      Startseite
                  </Link>
                  <Link
                      to="/angebote"
                      style={{textDecoration:"none",color:"#ffffff",padding:"12px"}}
                  >
                      Angebote
                  </Link>
              <Link style={{textDecoration:"none",color:"#ffffff",padding:"12px"}}
                    to="/preise"
              >
                  Preise
              </Link>
                  <Link
                      style={{textDecoration:"none",color:"#ffffff",padding:"12px"}}
                      to="/anfahrt"
                  >
                      Anfahrt & Öffnungszeiten
                  </Link>
                  <Link style={{textDecoration:"none",color:"#ffffff",padding:"12px"}}
                      to="/impressum"
                  >
                      Impressum & Datenschutz
                  </Link>
          </div>
      </div>
    </footer>
  );
}
