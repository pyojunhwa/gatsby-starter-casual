import React from 'react';

import Layout from '../components/Layout';

import badeanstalt from "../assets/images/badeanstalt.webp";
import tretboot from "../assets/images/tretboot.webp";
import volleyballfeld from "../assets/images/volleyballfeld.webp";
import standup from "../assets/images/standup.webp";
import {Link} from "gatsby";
import about from "../assets/images/about.webp";


const IndexPage = () => (
  <Layout activeLink="angebote">
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Die Badeanstalt
                </span>
              </h2>
            </div>
          </div>
          <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={badeanstalt}
              alt=""
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Ideal für alle Altersklassen! Dank des vom Steg umschlossenen Kinderbeckens mit Rutsche haben sie die Kleinen immer im Blick. Für die Großen eignet er sich hervorragend zum Hereinspringen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Bootsverleih
                </span>
              </h2>
            </div>
          </div>
          <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={tretboot}
              alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Ab 2,50€ die Stunde können die verschiedenen Bootarten gemietet werden. Weiter unten finden sie alle Preise
              </p>
            </div>
          </div>
        </div>
        <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={standup}
            alt=""
        />
      </div>
    </section>


    <section className="page-section about-heading">
      <div className="container">
        <img
            className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            src={volleyballfeld}
            alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-transparent rounded p-5">
                <div className="text-center">
                <div className="intro-button mx-auto">
                  <Link className="btn btn-primary btn-xl"  to="/preise">
                    Zu den Preisen
                  </Link>
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
</section>
  </Layout>
);

export default IndexPage;
