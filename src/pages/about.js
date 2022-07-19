import React from 'react';

import Layout from '../components/Layout';



import badeanstalt from "../assets/images/badeanstalt.webp";
import tretboot from "../assets/images/tretboot.webp";
import volleyballfeld from "../assets/images/volleyballfeld.webp";
import standup from "../assets/images/standup.webp";
const IndexPage = () => (
  <Layout activeLink="about">


    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Delicious Treats, Good Eats
                </span>
                <span className="section-heading-lower">
                  Bakery &amp; Kitchen
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
                Our seasonal menu features delicious snacks, baked goods, and
                even full meals perfect for breakfast or lunchtime. We source
                our ingredients from local, oragnic farms whenever possible,
                alongside premium vendors for specialty goods.
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
                  From Around the World
                </span>
                <span className="section-heading-lower">
                  Bulk Speciality Blends
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
                Travelling the world for the very best quality coffee is
                something take pride in. When you visit us, you'll always find
                new blends from around the world, mainly from regions in Central
                and South America. We sell our blends in smaller to large bulk
                quantities. Please visit us in person for more details.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
          className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
          src={volleyballfeld}
          alt=""
      /><img
        className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
        src={standup}
        alt=""
    />
    </section>

  </Layout>
);

export default IndexPage;
