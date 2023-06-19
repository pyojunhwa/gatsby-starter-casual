
import React from "react";
import Layout from '../components/Layout';
import gebueren from "../assets/images/gebueren.webp";
import wappen from "../assets/img/logo/Kaspelwerder-Logo_v01/PNG/KW-Logo-farbig.png";

const IndexPage = () => (
    <Layout activeLink="preise">
        <section className="page-section bg-faded">
            <div className="container">
              <div className="intro">
                <div className="intro-text-preise d-flex mr-auto">
                  <div className="bg-transparent p-5 d-flex ml-auto rounded">
                    <img alt="" src={wappen} style={{height: 250}}/>
                  </div>
                </div>
              </div>
                <img
                    className="intro-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                    src={gebueren}
                    alt=""

                />
            </div>
        </section>
    </Layout>
);
export default IndexPage;
