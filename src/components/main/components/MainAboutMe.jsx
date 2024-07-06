import { useState } from "react";
import TechStack from "./TechStack";
import "../../../styles/main/main-about-me.css";

function MainAboutMe() {
  const INITIAL_STATE = {
    name: "",
    className: "",
  };

  const [showTechStackText, setShowTechStackText] = useState(INITIAL_STATE);

  return (
    <section id="about-me" className="main-about-me grid">
      <h2 className="main-about-me-header">About Me</h2>
      <p className="main-about-me-text grid">
        Hi, my name is Satoki. <br />I am a junior full-stack developer based in
        the UK with a passion for developing functional and well-designed
        applications in our ever expanding world of technology. As a recent
        graduate of the full-time, six-month-long Boolean UK Software
        Development course, I have continued to develop my skills through a
        range of personal projects. I always strive to improve and use my
        problem-solving mindset to deliver calculated solutions, continuing to
        hone my skills every day. <br />
        <br /> Prior to becoming a full-stack developer, I accumulated over 5
        years of experience in the financial sector, having worked at both a
        bank and a financial advisory firm. These roles immersed me in
        fast-paced, dynamic environments in which I continuously challenged
        myself to learn and progress. This commitment to continuous growth is a
        value I uphold every day. <br />
        <br /> I have experience working with the following technologies (click
        or hover images):
      </p>
      <TechStack setShowTechStackText={setShowTechStackText} />
      <div className="tech-stack-text grid">
        <p className={showTechStackText.className}>{showTechStackText.name}</p>
      </div>
    </section>
  );
}

export default MainAboutMe;
