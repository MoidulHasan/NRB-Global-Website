import React from "react";
import "./About.css";
import Counter from "../../component/About/Counter/Counter";
import Mission from "../../component/About/Mission/Mission";
import Vision from "../../component/About/Vission/Vision";
import Objective from "../../component/About/Objective/Objective";
import Intro from "../../component/About/Intro/Intro";
import Founder from "../../component/About/Founder/Founder";

const About = () => {
  return (
    <div className="overflow-hidden">
      <Intro />
      <Mission />
      <Objective />
      <Vision />
      <Founder />
      <Counter />
    </div>
  );
};

export default About;
