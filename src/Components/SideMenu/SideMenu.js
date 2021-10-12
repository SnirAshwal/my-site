import { useEffect, useRef, useState } from "react";
import "./SideMenu.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { navbarLinks } from "./navbarLinks";
import { Link } from "react-scroll";

function SideMenu() {
  const useOutsideAlerter = (initialeValue) => {
    const menuRef = useRef(null);
    const [sidebar, setSidebar] = useState(initialeValue);
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, [menuRef]);
    return { sidebar, setSidebar, menuRef };
  };

  const { sidebar, setSidebar, menuRef } = useOutsideAlerter(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  let visibility = "hide";

  if (sidebar) {
    visibility = "show";
  }

  return (
    <div className="Sidebar-menu">
      {!sidebar && (
        <button className="nav-menu-btn">
          <FiMenu size={30} className="nav-menu-logo" onClick={showSidebar} />
        </button>
      )}

      <div className={`SideMenu ${visibility}`} ref={menuRef}>
        <div className="close-sidebar-btn-container">
          <button onClick={showSidebar} className="close-sidebar-btn">
            <AiOutlineClose size={25} />
          </button>
        </div>
        <div className="side-menu-container">
          {navbarLinks.map((link) => {
            const { id, name, to } = link;
            return (
              <Link
                key={id}
                to={to}
                smooth={true}
                className="nav-item side-nav-item"
                onClick={showSidebar}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
