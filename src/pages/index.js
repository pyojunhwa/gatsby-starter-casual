import React from 'react';

import Layout from '../components/Layout';
import intro from '../assets/images/intro.webp';
import See from "../assets/images/see.webp";
import {Link} from "gatsby";


const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={See}
            alt=""
          />
          <div className="intro-text text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Platz und Ruhe</span>
              <span className="section-heading-lower">Wir bieten ihnen</span>
            </h2>
            <p className="mb-3">
              ... eine Freizeitanlage wenige Meter vom Ostorfer See und nur 3km vom Zentrum entfernt. Sie ist ideal geeignet für eine Auszeit. Nutzen sie den Outdoorplatz für bis zu 150 Personen für ihre nächste Familien- oder Firmenfeier. Es gibt einen großen Grillplatz mit überdachter Terrasse und Seeblick. Rufen sie bei interesse einfach mal an!
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="tel:+491738305016">
                Tel.: 01738305016
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={intro}
              alt=""
          />
          <div className=" text-center rounded">
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
              Buchen sie einen der 20 ruhigen Stellplätzen für ihren Wohnwagen oder ihr Wohnmobil auf unserer Anlage. Für zwei Erwachsene kostet es nur 20€ pro Nacht. Genaueres finden sie auf der Preisliste:
            </p>
            <div className="intro-button mx-auto align-middle">
              <Link className="btn btn-primary btn-xl" to="/preise/">
                Zu den Preisen
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </section>


    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Baden, Liegen und</span>
                <span className="section-heading-lower">Tretboot fahren </span>
              </h2>
              <p className="mb-0">
                Um das kühle Nass zu genießen unsere Badeanstalt. Weiterhin bieten wir auch Tret- Ruder- und Stand-Up-boote zu verleih. Außerdem können sie es sich auf einer der vielen gepflegten Liegeflächen gutgehen lassen oder das Volleyballfeld buchen. Bitte verstehen sie, dass Hunde auf den Liegeflächen nicht erlaubt sind.
              </p>
              <div className="intro-button mx-auto">
                <Link className="btn btn-primary btn-xl"  to="/angebote">
                  Zu den Angeboten
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
