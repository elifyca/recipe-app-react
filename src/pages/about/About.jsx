import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Elif Yildiz </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, Elif Yildiz</h2>
        <h3>I’m currently learning Front-end Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, Python, NodeJS, HTML-CSS, 
          Bootstrap, MUI, Style Component, SASS-LESS
        </h4>
        <h2>
          <a href="mailto:elifyca@gmail.com">Send email</a> :
          https://github.com/elifyca
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;

