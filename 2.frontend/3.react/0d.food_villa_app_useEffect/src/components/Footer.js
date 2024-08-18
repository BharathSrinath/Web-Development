const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <a href="https://www.linkedin.com/in/bharathsrinath/" target="_blank">
        Bharath Srinath
      </a>
      {year}
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

export default Footer;