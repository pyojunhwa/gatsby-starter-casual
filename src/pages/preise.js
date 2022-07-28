
import React from "react";
import Layout from '../components/Layout';
import gebueren from "../assets/images/gebueren.webp";

const IndexPage = () => (
    <Layout activeLink="preise">
        <section className="page-section clearfix bg-faded">

            <div className="container">
                <img
                    className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                    src={gebueren}
                    alt=""
                />
            </div>
        </section>
    </Layout>
);
export default IndexPage;
