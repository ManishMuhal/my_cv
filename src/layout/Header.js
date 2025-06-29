import Link from "next/link";
import { Fragment, useState } from "react";

const Menu = () => (
  <Fragment>
    <div className="logo hover-masks-logo">
      <a href="#">
        <span className="mask-lnk">
          Manish <strong>Kumar</strong>
        </span>
        <span className="mask-lnk mask-lnk-hover">
          Download <strong>CV</strong>
        </span>
      </a>
    </div>
    {/* top menu */}
    <div className="top-menu hover-masks">
      <div className="top-menu-nav">
        <div className="menu-topmenu-container">
          <ul className="menu">
            <li className="menu-item menu-item-has-children">
              <Link href="/">
                <a>
                  <span className="mask-lnk">Home</span>
                  <span className="mask-lnk mask-lnk-hover">Home</span>
                </a>
              </Link>
           
            </li>
            <li className="menu-item menu-item-has-children">
              {/* <Link href="/resume"> */}
              <Link href="/">
                <a>
                  <span className="mask-lnk">Resume</span>
                  <span className="mask-lnk mask-lnk-hover">Resume</span>
                </a>
              </Link>
              {/* <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/resume">
                    <a>
                      <span className="mask-lnk">Resume Default</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Resume Default
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/resume_image">
                    <a>
                      <span className="mask-lnk">Resume Image</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Resume Image
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/resume_creative">
                    <a>
                      <span className="mask-lnk">Resume Creative</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Resume Creative
                      </span>
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
            <li className="menu-item menu-item-has-children">
              {/* <Link href="/works"> */}
              <Link href="/">
                <a>
                  <span className="mask-lnk">Works</span>
                  <span className="mask-lnk mask-lnk-hover">Works</span>
                </a>
              </Link>
              {/* <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/works">
                    <a>
                      <span className="mask-lnk">Works Default</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Works Default
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/works_creative">
                    <a>
                      <span className="mask-lnk">Works Creative</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Works Creative
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/work_single">
                    <a>
                      <span className="mask-lnk">Work Single</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Work Single
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/work_single_image">
                    <a>
                      <span className="mask-lnk">Work Single Image</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Work Single Image
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/work_single_creative">
                    <a>
                      <span className="mask-lnk">Work Single Creative</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Work Single Creative
                      </span>
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
            <li className="menu-item menu-item-has-children">
              {/* <Link href="/blog"> */}
              <Link href="/">
                <a>
                  <span className="mask-lnk">Blog</span>
                  <span className="mask-lnk mask-lnk-hover">Blog</span>
                </a>
              </Link>
              {/* <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/blog">
                    <a>
                      <span className="mask-lnk">Blog Posts</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Blog Posts
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/blog_post">
                    <a>
                      <span className="mask-lnk">Single Post</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Single Post
                      </span>
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href="/contacts">
                <a>
                  <span className="mask-lnk">Contact</span>
                  <span className="mask-lnk mask-lnk-hover">Contact</span>
                </a>
              </Link>
              {/* <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/contacts">
                    <a>
                      <span className="mask-lnk">Contact Default</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Contact Default
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contacts_map">
                    <a>
                      <span className="mask-lnk">Contact Map</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Contact Map
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contacts_image">
                    <a>
                      <span className="mask-lnk">Contact Image</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Contact Image
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contacts_creative">
                    <a>
                      <span className="mask-lnk">Contact Creative</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Contact Creative
                      </span>
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
);

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DeskTopHeader />
    </Fragment>
  );
};
export default Header;

const DeskTopHeader = () => (
  <header className={`header desktopHeader`}>
    <div className="head-top">
      <Menu />
    </div>
  </header>
);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      <div className="head-top">
        {/* menu button */}
        <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span />
        </a>
        {/* logo */}
        <Menu />
      </div>
    </header>
  );
};
