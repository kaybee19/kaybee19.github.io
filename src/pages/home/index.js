import React from "react";
import homeVideo from "../../assets/animations/homeVideo.gif";

// Comps
import PageLayout from "../../components/layout/PageLayout";
import RecentWork from "./RecentWork";

export default function Index() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <PageLayout
        name="home"
        animation={homeVideo}
        subHeader="TL;DR"
        heading1="Front-End Developer & Sr. Engineer"
        body1="A creative developer who specializes in building websites and web applications using JavaScript. From responsive to scalable designs, single-page to progressive-web applications, I help shape awesome and ambitious projects."
        heading2="About Me"
        body2={`While I am most comfortable staring at code and searching on Stack overflow, I do a little bit of everything when it comes to development lifecycle. I have a few design experiences and have more than dabbled with Illustrator and After Effects. I am not a typical designer but can still whip out some pretty cool UI.
          My main passion is the frontend, however. I use React, Vue.js, and JavaScript extensively for my projects, and I also have some intermediary blockchain experience. Currently I work with Provisions Group as a Developer and a Sr. Engineer where I focus on optimizing development and building scalable and reusable solutions.
        `}
        forecolor="#f98f41"
        backcolor="#f18331"
        darkcolor="#bf6d30"
      >
        <RecentWork />
      </PageLayout>
    </React.Fragment>
  );
}
