import React from "react";
import "./Hero.scss";
import { Controller, Scene } from "react-scrollmagic";
import { useApp } from "../../AppContext";

// Bootstrap
import Container from "react-bootstrap/Container";

export default function Hero(props) {
  const { height } = useApp();
  const { name, animation, bodyIsVisible } = props;

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <span className={`${bodyIsVisible ? "fade-in" : "fade-out"}`}>
        <div className={`${name}-bg fixed-bg`}></div>
        <Container className={`hero-container`}>
          <div className="header-text">front-end developer / sr. engineer</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:gafaikabir@yahoo.com"
            className="header-text contact"
          >
            reach out
          </a>
          {animation && height < 1200 && (
            <img
              src={animation}
              className={` ${height > 400 ? "shrink" : "big"} hero-gif`}
              alt="name-video"
            />
          )}
          <div className={`scroll-down  ${height > 400 ? "fade" : ""}`}>
            <i className="bi bi-chevron-compact-down"></i>
            <i className="bi bi-chevron-compact-down"></i>
          </div>
        </Container>
        <Controller>
          <Scene duration={100} pin={true} enabled={true}>
            <div className="sticky"></div>
          </Scene>
        </Controller>
      </span>
      <div
        className={`scroll-top ${height < 450 ? "fade-out" : "fade-in"}`}
        onClick={handleScroll}
      >
        <i className="bi bi-align-top"></i>
      </div>
    </React.Fragment>
  );
}
