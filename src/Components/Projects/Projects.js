import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import { ProjectsData } from "./data";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";

function Projects() {
  const [data, setData] = useState([]);

  const slider = useRef(null);

  useEffect(() => {
    setData(ProjectsData);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="box-shaddow">
      <div className="Projects">
        <div className="projects-section">
          <div className="projects-slider">
            <div className="main-title">PROJECTS</div>
            <hr className="title-underline"></hr>
            <div className="slider">
              <button
                onClick={() => slider?.current?.slickPrev()}
                className="slider-prev"
              >
                <IoIosArrowBack size={30} />
              </button>
              <Slider {...settings} ref={slider}>
                {data.map((project) => {
                  const { id, name, img, gitLink } = project;
                  return (
                    <div key={id} className="project-container">
                      <div className="project">
                        <div
                          className="project-img"
                          style={{
                            backgroundImage: `url(${img})`,
                          }}
                        >
                          <a href={gitLink} className="git-project-link">
                            <AiFillGithub />
                          </a>
                          <div className="project-details">{name}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
              <button
                onClick={() => slider?.current?.slickNext()}
                className="slider-next"
              >
                <IoIosArrowForward size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
