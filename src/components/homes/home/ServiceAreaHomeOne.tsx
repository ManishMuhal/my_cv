'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: React.JSX.Element;
  accordion_data: {
    id: number;
    tab_id: string;
    question: string;
    answer: string;
    some_features: string[];
  }[];
}

const service_content: DataType = {
  subtitle: "Services",
  title: <>What <br /> I Can Do For You.</>,
  sm_des: (
    <>
      I specialize in building modern, high-performance, clean and scalable
      frontend applications using React, Next.js & TypeScript.
      <br />
      I turn UI/UX into fully functional, pixel-perfect responsive interfaces.
    </>
  ),
  accordion_data: [
    {
      id: 1,
      tab_id: "One",
      question: "Frontend Development",
      answer:
        "I build clean, optimized and scalable frontend interfaces using React.js, Next.js, TypeScript, Redux, Zustand and modern UI libraries.",
      some_features: [
        "Pixel-perfect UI development",
        "High performance & optimized code",
        "Reusable component architecture",
        "SPA / SSR / SSG using Next.js",
      ],
    },
    {
      id: 2,
      tab_id: "Two",
      question: "Admin Panel Development",
      answer:
        "I create powerful, fast and clean admin dashboards for HRMS, CRM, SaaS, Fantasy gaming & Analytics platforms.",
      some_features: [
        "Role-based dashboards",
        "Complex data tables & filters",
        "Charts, graphs & analytics UI",
        "API integration & state management",
      ],
    },
    {
      id: 3,
      tab_id: "Three",
      question: "API Integration & State Management",
      answer:
        "I integrate REST APIs using React Query, Redux, Zustand & Axios with perfect error handling and loading states.",
      some_features: [
        "React Query / Redux Toolkit",
        "Secure & scalable API integration",
        "Error, loading & empty states",
        "Auth token handling",
      ],
    },
    {
      id: 4,
      tab_id: "Four",
      question: "UI Optimization & Bug Fixing",
      answer:
        "I improve performance, remove UI glitches, fix responsiveness issues and enhance overall user experience.",
      some_features: [
        "Performance optimization",
        "Responsive UI fixes",
        "Code cleanup & refactoring",
        "Design consistency improvements",
      ],
    },
  ],
};


const { subtitle, title, sm_des, accordion_data } = service_content;


const ServiceAreaHomeOne = () => {
  const [active, setActive] = useState(1);

  const handleItemClick = (index: number) => {
    setActive(index);
  }

  return (
    <>
      <section className="tp-services-area tp-sv tp-services-bg-text-animation fix" id="tp-sv">
        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">

            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p>Services</p>
            </div>
            <div className="row gx-0">

              <div className="col-xl-6 col-lg-7">
                <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70"
                  style={{ paddingTop: "100px", }}
                  data-tp-throwable-scene="true">
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle">{subtitle}</span>
                      <h3 className="tp-section-title tp_title_anim">{title}</h3>
                    </div>
                    <p>{sm_des}</p>
                  </div>

                  <div className="tp-services-capsule-item-wrapper">

                    {/* Core Frontend */}
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>React.js</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Next.js</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>TypeScript</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>JavaScript (ES6+)</span></p>

                    {/* State Management */}
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Redux Toolkit</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Zustand</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>React Query</span></p>

                    {/* UI Libraries */}
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Material UI</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Ant Design</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Tailwind CSS</span></p>

                    {/* API & Tools */}
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>API Integration</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Axios</span></p>

                    {/* Performance */}
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Optimization</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Lazy Loading</span></p>

                    {/* Product Specific */}
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Admin Dashboard</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>HRMS UI</span></p>
                    <p data-tp-throwable-el=""><span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Cricket App UI</span></p>

                    <p data-tp-throwable-el=""><span><Image src={shape_1} alt="brand-img" /></span></p>
                    <p data-tp-throwable-el=""><span><Image src={shape_2} alt="brand-img" /></span></p>

                  </div>


                </div>
              </div>

              <div className="col-xl-6 col-lg-5">
                <div className="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative" style={{ marginTop: "90px" }}>
                  <span className="tp-services-accordion-border"></span>
                  <div className="accordion" id="accordionExample">

                    {accordion_data.map((item, i) => (
                      <div key={i} onClick={() => handleItemClick(i)} className={`accordion-item tp-services-accordion-item ${active === i ? 'active' : ''}`}>
                        <h2 className="accordion-header" id={`heading${item.tab_id}`}>
                          <button
                            className={`accordion-button ${i === 1 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`}
                            aria-expanded={`${i === 1 ? 'true' : 'false'}`}
                            aria-controls={`collapse${item.tab_id}`}
                            tabIndex={0}
                          >
                            <span>0{item.id}</span>
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.tab_id}`}
                          className={`accordion-collapse collapse ${i === 1 ? 'show' : ''}`}
                          aria-labelledby={`heading${item.tab_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                            <ul>
                              {item.some_features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <span className="accordion-item-border"></span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;