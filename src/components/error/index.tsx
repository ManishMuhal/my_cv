import React from 'react'; 
import Breadcrumb from './Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterFour from '@/layouts/footers/FooterFour';

const Error = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb />
        <section className="error-area black-bg-2 z-index-11 py-5">
          <div className="tp-erorr-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-erorr-content text-center">
                  
                  <h2 className="tp-char-animation text-light my-0 py-0" 
                      style={{ fontSize: '80px', fontWeight: 'bold' }}>
                    🚧 UNDER CONSTRUCTION 🚧
                  </h2>

                  <h3 className="blog-list__title tp-char-animation text-light mt-3">
                    This page is currently being updated.
                  </h3>

                  <h4 className="tp-char-animation text-light mt-2">
                    We’ll be back soon with something awesome!
                  </h4>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterFour />
    </>
  );
};

export default Error;