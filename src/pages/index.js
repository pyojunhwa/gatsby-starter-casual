import React from 'react';

import Layout from '../components/Layout';
import intro from '../assets/images/intro.webp';
import See from "../assets/images/see.webp";
import {Link} from "gatsby";
import wappen from "../assets/img/logo/Kaspelwerder-Logo_v01/PNG/KW-Logo-farbig-kontur.png";


const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <div className="intro-text-right d-flex mr-auto">
            <div className="bg-transparent p-5 d-flex ml-auto rounded">
              <img alt="" src={wappen} className="intro-wappen"/>
            </div>
          </div>
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={See}
            alt=""
          />
          <div className="intro-text text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Platz und Ruhe</span>
              <span className="section-heading-lower">Wir bieten Ihnen</span>
            </h2>
            <p className="mb-3">
              ... eine Freizeitanlage nur wenige Meter vom Ostorfer See und nur 3 km vom Zentrum entfernt. Sie ist ideal für eine erholsame Auszeit. Nutzen Sie unseren Outdoorplatz für bis zu 150 Personen für Ihre nächste Familien- oder Firmenfeier. Wir bieten Ihnen einen großartigen Grillplatz mit überdachter Terrasse und Seeblick. Rufen Sie uns bei Interesse einfach an!
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="tel:+491738305016">
                Telefon: 0173 8305016
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="intro">

          <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={intro}
              alt=""
          />
          <div className=" text-center rounded">
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Buchen Sie einen unserer 20 ruhigen Stellplätze für Ihren Wohnwagen oder Ihr Wohnmobil auf unserer erstklassigen Anlage. Für nur 20€ pro Nacht können zwei Erwachsene die Unterkunft genießen. Weitere Details finden Sie auf unserer umfassenden Preisliste.
            </p>
            <div style={{paddingTop: 30}}  className="intro-button mx-auto align-middle">
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
                <span className="section-heading-upper">Badespaß, Bootsfahrten und</span>
                <span className="section-heading-lower">Entspannung pur</span>
              </h2>
              <p className="mb-0">
                Tauchen Sie ein in das erfrischende Wasser in unserem Badebereich und genießen Sie die Vielfalt an Aktivitäten. Wir bieten Ihnen auch die Möglichkeit, Tret-, Ruder- und Stand-Up-Boote auszuleihen. Entspannen Sie auf unseren gepflegten Liegeflächen oder reservieren Sie das Volleyballfeld für eine Partie.
              </p>
              <div style={{paddingTop: 30}} className="intro-button mx-auto">
                <Link className="btn btn-primary btn-xl" to="/angebote">
                  Entdecken Sie unsere Angebote
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
