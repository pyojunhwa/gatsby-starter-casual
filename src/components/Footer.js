import React from 'react';
import {Link} from "gatsby";
import wortmarke from "../assets/img/logo/Kaspelwerder-Logo_v01/PNG/KW-Wortmarke-farbig-negativ.png";

export default function Footer() {
  return (
    <footer className="footer text-center py-5">
      <div className="container">
        <img src={wortmarke} style={{height: 160, paddingBottom: 30}}/>
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
