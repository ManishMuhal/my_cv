"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

// Images
import portfolio_img_1 from "@/assets/img/portfolio/portfolio-2.jpg";
import portfolio_img_2 from "@/assets/img/portfolio/portfolio-3.jpg";
import portfolio_img_3 from "@/assets/img/portfolio/portfolio-1.jpg";

// Icons
import UpArrowIconPortfolio from "@/svg/home/PortfolioIcons/UpArrowIconPortfolio";
import RitghtArrowIconPortfolio from "@/svg/home/PortfolioIcons/RitghtArrowIconPortfolio";

// Portfolio Content (UPDATED)
const portfolio_content = {
  subtitle: "Projects",
  title: "Latest Work",
  portfolio_data: [
    {
      id: 1,
      img: portfolio_img_1,
      bg_img: "/assets/img/portfolio/portfolio-2.jpg",
      title: "HRMS – Employee & Payroll System",
      category: "HRMS / Admin Panel",
      number: "01",
    },
    {
      id: 2,
      img: portfolio_img_2,
      bg_img: "/assets/img/portfolio/portfolio-3.jpg",
      title: "Fantasy Gaming App – Dashboard UI",
      category: "Fantasy App / React UI",
      number: "02",
    },
    {
      id: 3,
      img: portfolio_img_3,
      bg_img: "/assets/img/portfolio/portfolio-1.jpg",
      title: "Cricket Live Score App",
      category: "Cricket / Live Updates UI",
      number: "03",
    },
  ],
};

const { subtitle, title, portfolio_data } = portfolio_content;

const PortfolioAreaHomeOne = () => {
  return (
    <>
      <section className="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix">
        {/* Background Text */}
        <div className="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center tp-portfolio-bg-text-animation">
          <p>{title}</p>
          <p>{title}</p>
        </div>

        <div className="container">
          <div className="row">
            {/* LEFT SIDE SECTION */}
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-wrapper pr-30 pt-55">
                {/* Section Title */}
                <div className="tp-section-title-wrapper mb-60">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle tp-portfolio-subtitle">
                      {subtitle}
                    </span>
                    <h3 className="tp-section-title tp_title_anim">{title}</h3>
                  </div>
                </div>

                {/* First Portfolio Item (Static) */}
                <div className="tp-portfolio-item-wrapper">
                  <div className="tp-portfolio-item mb-70">
                    <Link href="/portfolio-details">
                      <div className="tp-portfolio-thumb img-1 w-img fix">
                        <div
                          className="tp-portfolio-thumb-img include-bg d-none"
                          style={{
                            backgroundImage:
                              "url(/assets/img/portfolio/portfolio-2.jpg)",
                          }}
                        ></div>

                        <div className="tp-portfolio-thumb-img">
                          <Image
                            data-speed="0.85"
                            style={{ objectFit: "cover", height: "auto" }}
                            src={portfolio_img_1}
                            alt="image-here"
                          />
                        </div>
                      </div>

                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">
                          HRMS – Employee Management
                        </h3>

                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">01</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>

                          <div className="tp-portfolio-meta-hover">
                            <span>HRMS / Admin Panel</span>
                            <span className="tp-portfolio-meta-link">
                              View Project
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* BUTTON */}
             
              </div>
            </div>

            {/* RIGHT SIDE SECTION (Dynamic Items) */}
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-item-wrapper pl-50">
                {portfolio_data.map((item) => (
                  <div key={item.id} className="tp-portfolio-item mb-70">
                    <Link href="/portfolio-details">
                      <div className="tp-portfolio-thumb img-2 w-img fix">
                        <div
                          className="tp-portfolio-thumb-img include-bg d-none"
                          style={{
                            backgroundImage: `url(${item.bg_img})`,
                          }}
                        ></div>

                        <div className="tp-portfolio-thumb-img">
                          <Image
                            data-speed="0.85"
                            style={{ height: "auto" }}
                            src={item.img}
                            alt={item.title}
                          />
                        </div>
                      </div>

                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{item.title}</h3>

                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">
                            {item.number}
                          </span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>

                          <div className="tp-portfolio-meta-hover">
                            <span>{item.category}</span>
                            <span className="tp-portfolio-meta-link">
                              View Project
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAreaHomeOne;
