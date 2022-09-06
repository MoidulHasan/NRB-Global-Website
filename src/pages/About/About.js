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
    <>
      <Intro />
      <Mission />
      <Objective />
      <Vision />
      <Founder />
      {/* <Counter /> */}
    </>
  );
};

export default About;
