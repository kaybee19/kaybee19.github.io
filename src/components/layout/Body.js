import React from "react";
import "./Body.scss";
import ImageContainer from "./ImageContainer";
import { useApp } from "../../AppContext";

// Hook for checking viewport + animation package
import { useInView } from "react-hook-inview";
import SmoothList from "react-smooth-list";

// Bootstrap
import Container from "react-bootstrap/Container";

export default function Body(props) {
  const {
    subHeader,
    heading1,
    body1,
    heading2,
    body2,
    images,
    backcolor,
    darkcolor,
  } = props;

  const { width } = useApp();

  const [view, setView] = React.useState(false);
  const [ref, isVisible] = useInView({
    threshold: 0,
  });

  // Trigger setView on viewport enter
  React.useEffect(() => {
    if (width < 900) {
      setTimeout(() => {
        isVisible ? setView(true) : setView(false);
      }, 500);
    } else {
      isVisible ? setView(true) : setView(false);
    }
  }, [isVisible, width]);

  return (
    <Container ref={ref} className="body-container">
      <div className="top">
        <SmoothList transitionDuration={1100} delay={1100} visible={view}>
          <div className="content">
            <span>
              {subHeader && <h3>{subHeader}</h3>}
              <hr className="divider"></hr>
            </span>
            <h2>{heading1}</h2>
            <h4>{body1}</h4>
          </div>
        </SmoothList>
        {isVisible && (
          <div className={`separator separator-animation`}>
            <svg
              className="separator__svg"
              width="100%"
              height="400"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill={backcolor}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 100 100 V 10 L 0 100" />
              <path
                d="M 30 73 L 100 18 V 10 Z"
                fill={darkcolor}
                strokeWidth="0"
              />
            </svg>
          </div>
        )}
      </div>
      <div style={{ backgroundColor: backcolor }} className="bottom">
        <h2>{heading2}</h2>
        <hr className="divider"></hr>
        <h4>{body2}</h4>
        {images && <ImageContainer images={images} />}
      </div>
    </Container>
  );
}
