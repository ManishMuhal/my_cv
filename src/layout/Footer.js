const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: manishmuhal89@gmail.com</p>
        <p>T: +91 8005753265</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/manish-kumar-172b01142/">
            <span className="icon fab fa-linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mr_manishmuhal/">
            <span className="icon fab fa-instagram" />
          </a>
          {/* <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
            <span className="icon fab fa-dribbble" />
          </a> */}
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
