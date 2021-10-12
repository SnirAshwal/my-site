import "./Navbar.css";
import { Link } from "react-scroll";
import SideMenu from "../SideMenu/SideMenu";
import { navbarLinks } from "../SideMenu/navbarLinks";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-container">
        {navbarLinks.map((link) => {
          const { id, name, to } = link;
          return (
            <Link key={id} className="nav-item" to={to} smooth={true}>
              {name}
            </Link>
          );
        })}
      </div>
      <div className="side-menu">
        <SideMenu />
      </div>
    </div>
  );
}

export default Navbar;
