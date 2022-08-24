import React from "react";
import "./RecentWork.scss";
import { Link } from "react-router-dom";
import { useApp } from "../../AppContext";
import workImg2 from "../../assets/animations/workImg2.gif";

// Hook for checking viewport + animation package
import { useInView } from "react-hook-inview";
import SmoothList from "react-smooth-list";

// Comps
import ButtonBorder from "../../components/layout/ButtonBorder";

export default function RecentWork() {
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
    <div ref={ref} className="recent-work">
      <SmoothList transitionDuration={500} delay={500} visible={view}>
        <img className="work-img" src={workImg2} alt="view work" />
        {isVisible && (
          <Link to="/projects" className="link-class">
            <ButtonBorder text="view recent projects" />
          </Link>
        )}
      </SmoothList>
    </div>
  );
}
