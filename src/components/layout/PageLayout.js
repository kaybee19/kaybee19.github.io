import React from "react";
import "./PageLayout.scss";
import { useApp } from "../../AppContext";

// Hook for checking viewport + animation package
import { useInView } from "react-hook-inview";
import SmoothList from "react-smooth-list";

// Comps
import Hero from "./Hero";
import Body from "./Body";
import Footer from "./Footer";

export default function PageLayout(props) {
  const {
    name,
    animation,
    subHeader,
    heading1,
    body1,
    heading2,
    body2,
    images,
    children,
    forecolor,
    backcolor,
    darkcolor,
  } = props;

  const { width } = useApp();

  const [view, setView] = React.useState(false);
  const [bodyRef, bodyIsVisible] = useInView({
    threshold: 0,
  });
  const [childRef, childIsVisible] = useInView({
    threshold: 0,
  });

  // Trigger setView on viewport enter
  React.useEffect(() => {
    if (width < 900) {
      setTimeout(() => {
        bodyIsVisible ? setView(true) : setView(false);
      }, 500);
    } else {
      bodyIsVisible ? setView(true) : setView(false);
    }
  }, [bodyIsVisible, width]);

  return (
    <section style={{ background: forecolor }} className="page-layout">
      <div className="snap-container">
        <Hero
          name={name}
          animation={animation}
          bodyIsVisible={!bodyIsVisible && !childIsVisible}
        />
      </div>
      <div
        ref={bodyRef}
        className={`${bodyIsVisible ? "fade-in" : "fade-out"} snap-container`}
      >
        <SmoothList transitionDuration={500} delay={500} visible={view}>
          <Body
            subHeader={subHeader}
            heading1={heading1}
            body1={body1}
            heading2={heading2}
            body2={body2}
            images={images}
            forecolor={forecolor}
            backcolor={backcolor}
            darkcolor={darkcolor}
          />
        </SmoothList>
      </div>
      <div ref={childRef}>
        {children}
      </div>
      <Footer />
    </section>
  );
}
