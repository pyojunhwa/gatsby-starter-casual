import React from "react";
import Layout from "../components/Layout";
const IndexPage = () => (
  <Layout activeLink="preise">
    <br/>
    <br/>
    <br/>
    <div className="container">
      <div className="row intro">
        <div className="col-xl-9 col-lg-10 mx-auto">
          <div className="bg-faded rounded p-5">
            <h2 className="section-heading mb-5">
              <span className="section-heading-lower">Wohnmobil und Wohnwagen</span>
              <span className="section-heading-upper"> (pro Nacht)</span>
            </h2>
            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
              <li className="list-unstyled-item list-hours-item d-flex">
                1-2 Erwachsene
                <span className="ml-auto">20,00€</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Jeder weitere Erwachsene
                <span className="ml-auto">5,00€</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Kinder von 2-16 Jahren
                <span className="ml-auto">3,00€</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Strom
                <span className="ml-auto">2,00€</span>
              </li>
            </ul>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-lg-10 mx-auto">
          <div className="bg-faded rounded p-5">
            <h2 className="section-heading mb-5">
              <span className="section-heading-lower">Verleihgebühren</span>
            </h2>
            <span className="section-heading-upper">Tretboot (für 1 Stunde)</span>
            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
              <li className="list-unstyled-item list-hours-item d-flex">
                Erwachsene und Kinder ab 14 Jahre
                <span className="ml-auto">5,00€</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Kinder von 3-13 Jahren
                <span className="ml-auto">3,50€</span>
              </li>
            </ul>

            <span className="section-heading-upper">Ruderboot (für 1 Stunde)</span>
            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
              <li className="list-unstyled-item list-hours-item d-flex">
                Erwachsene und Kinder ab 14 Jahre
                <span className="ml-auto">4,00€</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Kinder von 3-13 Jahren
                <span className="ml-auto">2,50€</span>
              </li>
            </ul>

            <span className="section-heading-upper">Stand Up Board (ab 18 Jahre)</span>
            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
              <li className="list-unstyled-item list-hours-item d-flex">
                1/2 Stunde
                <span className="ml-auto">8,00€</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                1 Stunde
                <span className="ml-auto">15,00€</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                3 Stunden
                <span className="ml-auto">35,00€</span>
              </li>
            </ul>

            <span className="section-heading-upper">Volleyballfeld</span>
            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
              <li className="list-unstyled-item list-hours-item d-flex">
                Volleyballfeld
                <span className="ml-auto">2,00€</span>
              </li>
            </ul>

            <span className="section-heading-upper">Grillgerät</span>
            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
              <li className="list-unstyled-item list-hours-item d-flex">
                Inklusive Grillkohle
                <span className="ml-auto">15,00€</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Jede weitere Füllung
                <span className="ml-auto">5,00€</span>
              </li>
            </ul>

            <span className="section-heading-upper">Toilettenbenutzung</span>
            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
              <li className="list-unstyled-item list-hours-item d-flex">
                Schlüssel am Kiosk erhältlich
                <span className="ml-auto">0,50€</span>
              </li>
            </ul>

            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
              <p className="">
                Der Verleih von Booten und Tretbooten erfolgt nur gegen Vorlage eines gültigen Personalausweises oder Schülerausweises ab einem Alter von 14 Jahren.</p>
            </ul>
          </div>
    <br/>
          <br/>
        </div>
      </div>
    </div>
  </Layout>
);
export default IndexPage;
