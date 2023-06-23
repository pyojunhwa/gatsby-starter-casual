import React from 'react';
import {Link} from "gatsby";
import wortmarke from "../assets/img/logo/Kaspelwerder-Logo_v01/PNG/KW-Wortmarke-farbig-negativ.png";

export default function Footer() {
  return (
    <footer className="footer text-center py-5">
        <Link
          to="/"
        >
        <img alt="" src={wortmarke} style={{height: 160, paddingBottom: 30}}/>
        </Link>
          <div className="footer-div">
                  <Link
                      to="/angebote"
                      style={{textDecoration:"none",color:"#ffffff",padding:"18px"}}
                      className="text-uppercase "
                  >
                      Angebote
                  </Link>
              <Link style={{textDecoration:"none",color:"#ffffff",padding:"18px"}}
                    to="/preise"
                    className="text-uppercase "
              >
                  Preise
              </Link>
                  <Link
                      style={{textDecoration:"none",color:"#ffffff",padding:"18px"}}
                      to="/anfahrt"
                      className="text-uppercase "
                  >
                      Anfahrt & Öffnungszeiten
                  </Link>
                  <Link style={{textDecoration:"none",color:"#ffffff",padding:"18px"}}
                      to="/impressum"
                        className="text-uppercase "
                  >
                      Impressum & Datenschutz
                  </Link>
          </div>
    </footer>
  );
}
