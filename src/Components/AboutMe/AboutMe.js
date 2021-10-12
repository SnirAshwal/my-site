import "./AboutMe.css";

function AboutMe() {
  return (
    <div id="About-me" className="AboutMe">
      <div className="main-title">ABOUT-ME</div>
      <hr className="title-underline"></hr>
      <p className="about-me-context">
        <span style={{ fontSize: "2rem", color: "white" }}>
          Hi, my name is Snir.
        </span>
        <br />
        <span style={{ fontSize: "1.8rem", color: "white" }}>
          i am a full stack developer based in Israel.
        </span>
        <br />
        i specialize with different technologies on both front-end and back-end
        sides.
        <br />
        very passionate about coding and expanding my existing knowledge in
        different spectrums of the coding world.
        <br />
        you can check out my recent projects on the projects section and also
        contact me through my email on the contact-me section down below in
        regard of different interests you have to work together.
      </p>
    </div>
  );
}

export default AboutMe;
