import React from 'react';
import {Link} from "gatsby";
import wortmarke from "../assets/img/logo/Kaspelwerder-Logo_v01/PNG/KW-Wortmarke-farbig-negativ.png";

export default function Footer() {
  return (
    <footer className="footer text-center py-5">
      <div className="container">
        <Link
          to="/"
          style={{textDecoration:"none",color:"#ffffff",padding:"12px"}}
        >
        <img alt="" src={wortmarke} style={{height: 160, paddingBottom: 30}}/>
        </Link>
          <div className="flex-row mx-auto">
                  <Link
                      to="/angebote"
                      style={{textDecoration:"none",color:"#ffffff",padding:"12px"}}
                      className="text-uppercase"
                  >
                      Angebote
                  </Link>
              <Link style={{textDecoration:"none",color:"#ffffff",padding:"12px"}}
                    to="/preise"
                    className="text-uppercase"
              >
                  Preise
              </Link>
                  <Link
                      style={{textDecoration:"none",color:"#ffffff",padding:"12px"}}
                      to="/anfahrt"
                      className="text-uppercase"
                  >
                      Anfahrt & Öffnungszeiten
                  </Link>
                  <Link style={{textDecoration:"none",color:"#ffffff",padding:"12px"}}
                      to="/impressum"
                        className="text-uppercase"
                  >
                      Impressum & Datenschutz
                  </Link>
          </div>
      </div>
    </footer>
  );
}
