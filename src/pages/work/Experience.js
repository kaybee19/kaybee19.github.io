import React from "react";
import { useApp } from "../../AppContext";

// Hook for checking viewport + animation package
import { useInView } from "react-hook-inview";
import SmoothList from "react-smooth-list";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Experience(props) {
  const { role, company, summary, about, date, image, radius } = props.exp;

  const { width } = useApp();

  const [view, setView] = React.useState(false);
  const [ref, isVisible] = useInView({
    threshold: 0.25,
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
    <Container ref={ref}>
      <Row>
        <div className="col-6">
          <SmoothList transitionDuration={1500} visible={view}>
            <h5>{role}</h5>
            <h1>{company}</h1>
            <p>{summary}</p>
            <p>{about}</p>
            <h5>{date}</h5>
          </SmoothList>
        </div>
        <div className="col-6">
          <img
            src={image}
            className={`${radius ? "border-round" : ""} exp-image`}
            alt={`${company} logo`}
          />
        </div>
      </Row>
    </Container>
  );
}
