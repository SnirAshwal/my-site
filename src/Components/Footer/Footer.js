import "./Footer.css";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="Footer">
      <Link to={"Header"} smooth={true}>
        <RiArrowUpSLine size={50} className="arrow-up" />
      </Link>

      <div className="footer-social">
        <a
          href="https://github.com/SnirAshwal"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={30} className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/snirashwal/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} className="social-icon" />
        </a>
        <a
          href="https://www.facebook.com/snir.ashwal"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare size={30} className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
