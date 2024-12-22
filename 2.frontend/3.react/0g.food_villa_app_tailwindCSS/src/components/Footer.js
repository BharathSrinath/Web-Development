const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className= "flex justify-center bg-green-300 shadow-lg fixed bottom-0 left-0 w-full">
      <p>Created By<a href="https://www.linkedin.com/in/bharathsrinath/" target="_blank"><span className="font-bold"> Bharath Srinath</span>, </a>{year}</p>
    </div>
  );
};

export default Footer;
