import React from "react";
import { useApp } from "../../AppContext";
import ButtonBorder from "../../components/layout/ButtonBorder";

// Hook for checking viewport + animation package
import { useInView } from "react-hook-inview";
import SmoothList from "react-smooth-list";

// Bootstrap
import Col from "react-bootstrap/Col";

export default function Projects(props) {
  const { title, text, link, img } = props.pro;

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
    <Col ref={ref}>
      {view && (
        <SmoothList transitionDuration={1500} visible={view}>
          <h1>{title}</h1>
          <p>{text}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="link-class"
          >
            <ButtonBorder small white text="view live" />
          </a>
          <img src={img} alt={`${img}`} className="project-img" />
        </SmoothList>
      )}
    </Col>
  );
}
