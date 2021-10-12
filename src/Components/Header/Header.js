import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="box-shaddow">
        <div className="header-bg"></div>
      </div>
      <a
        href="https://www.linkedin.com/in/snirashwal/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="header-img"></div>
      </a>
      <div className="header-title-container">
        <div className="header-title">MY SPECIALTY?</div>
        <div className="header-sub-title">WHATEVER YOU NEED IT TO BE</div>
      </div>
    </div>
  );
}

export default Header;
