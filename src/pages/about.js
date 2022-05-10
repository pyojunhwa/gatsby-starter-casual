import React from 'react';

import Layout from '../components/Layout';




import about from '../assets/images/about.jpg';
const IndexPage = () => (
  <Layout activeLink="about">
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
                  <span className="section-heading-lower">Öffnungszeiten Tretboot</span>
                </h2>
                <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Sunday
                    <span className="ml-auto">Closed</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Monday
                    <span className="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Tuesday
                    <span className="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Wednesday
                    <span className="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Thursday
                    <span className="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Friday
                    <span className="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Saturday
                    <span className="ml-auto">9:00 AM to 5:00 PM</span>
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
