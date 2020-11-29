import React from "react";
import Main from "../src/images/images.jpg";
import Common from "./Common";



const About = () => {
  return (
    <>
      <Common name="Welcome to About page" 
      imgsrc={Main} visit="/contact"
       btname="contact now"/>
    </>
  );
};

export default About;




