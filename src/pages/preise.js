
import React from "react";
import Layout from '../components/Layout';
import gebueren from "../assets/images/gebueren.webp";

const IndexPage = () => (
    <Layout activeLink="preise">
        <section className="page-section bg-faded">
            <div className="container">
            <div className="container">
                <img
                    className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                    src={gebueren}
                    alt=""
                />
            </div>
            </div>
        </section>
    </Layout>
);
export default IndexPage;
