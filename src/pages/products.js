import React from 'react';

import Layout from '../components/Layout';

import product1 from '../assets/images/google_maps Kaspelwerder.webp';
import about from "../assets/images/about.webp";

const IndexPage = () => (
  <Layout activeLink="products">
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-lower">
                  Besuchen sie uns
                </span>
                <span className="section-heading-upper">
                  Am Erlenbruch 20, 19061 Schwerin
                </span>
              </h2>
            </div>
          </div>
          <a href="https://goo.gl/maps/2UiVKqYf2Af3AGHv6">
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product1}
            alt=""
          />
          </a>
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Das Bild ist ein Link zu Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section about-heading">
      <div className="container">
        <img
            className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            src={about}
            alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-lower">Öffnungszeiten</span>
                </h2>
                <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Badeanstalt
                    <span className="ml-auto"> täglich 10-19 Uhr</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Saison für Wohnmobil und Baden
                    <span className="ml-auto">Anfang Mai bis Ende September</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
