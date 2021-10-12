import "./Technologies.css";
import { FaJava, FaReact, FaPython, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiSpring,
  SiMongodb,
  SiTypescript,
  SiCss3,
  SiRedux,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Technologies() {
  return (
    <div id="Technologies" className="Technologies">
      <div className="main-title">TECHNOLOGIES</div>
      <hr className="title-underline"></hr>
      <div className="technologies-section">
        <div className="tech-items-container">
          <div className="tech-item typescript">
            <SiTypescript size={20} className="tech-icon" />
          </div>

          <div className="tech-item spring">
            <SiSpring size={30} className="tech-icon" />
          </div>
          <div className="tech-item react">
            <FaReact size={30} className="tech-icon" />
          </div>
          <div className="tech-item python">
            <FaPython size={30} className="tech-icon" />
          </div>
          <div className="tech-item my-sql">
            <GrMysql size={50} className="tech-icon" />
          </div>
        </div>
        <div className="tech-items-container">
          <div className="tech-item mongo-db">
            <SiMongodb size={30} className="tech-icon" />
          </div>
          <div className="tech-item javascript">
            <IoLogoJavascript size={30} className="tech-icon" />
          </div>
          <div className="tech-item java">
            <FaJava size={35} className="tech-icon" />
          </div>
          <div className="tech-item nodejs">
            <FaNodeJs size={30} className="tech-icon" />
          </div>
        </div>
        <div className="tech-items-container">
          <div className="tech-item html5">
            <FaHtml5 size={45} className="tech-icon" />
          </div>
          <div className="tech-item css3">
            <SiCss3 size={35} className="tech-icon " />
          </div>
          <div className="tech-item redux">
            <SiRedux size={30} className="tech-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
