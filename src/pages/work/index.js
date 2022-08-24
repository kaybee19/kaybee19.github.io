import React from "react";
import workVideo from "../../assets/animations/workVideo.gif";

// Comps
import MyExperience from "./MyExperience";
import PageLayout from "../../components/layout/PageLayout";

export default function Index(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <PageLayout
        name="work"
        animation={workVideo}
        heading1="Work Experience"
        body1="I've worked primarily as a front-end developer, but I have picked up a wide array of other skills I leverage on along the way."
        heading2="Skillset"
        body2="Having started off as a database developer I have extensive architectural and database knowledge; I’ve also picked up Firebase, DynamoDB and MongoDB experience along the way. I’ve long since moved to the front-end, and most of my recent opportunities focus on that."
        forecolor="#5441f9"
        backcolor="#4432f1"
        darkcolor="#2e20b7"
      >
        <MyExperience />
      </PageLayout>
    </React.Fragment>
  );
}
