import { Fragment } from "react";
const ContactSection = () => {
  return (
    <Fragment>
      {/* Section Contacts Info */}
      <div className="section contacts" id="next_section">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contacts Info</div>
          </div>
          {/* contacts items */}
          <div className="service-items">
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-phone" />
                </div>
                <div className="name">Phone</div>
                <div className="text">+91 8005753265</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-envelope" />
                </div>
                <div className="name">Email</div>
                <div className="text">
                  <a href="mailto:manishmuhal89@gmail.com">
                    manishmuhal89@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-map-marker-alt" />
                </div>
                <div className="name">Address</div>
                <div className="text">Churu Rajasthan</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-user-tie" />
                </div>
                <div className="name">Freelance Available</div>
                <div className="text">I am available for Freelance hire</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
      {/* Section Contacts Form */}
      <div className="section contacts" id="section-contacts">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contacts Form</div>
          </div>
          {/* form */}
          <div className="contact_form content-box">
            <form id="cform" method="post">
              <div className="group-val">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="group-val">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="group-val ct-gr">
                <textarea
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="group-bts">
                <button type="submit" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Send Message</span>
                </button>
              </div>
            </form>
            <div className="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default ContactSection;
