import React from "react";
import portVideo from "../../assets/animations/portVideo.gif";
import {
  apertureLogo,
  bambooLogo,
  brynLogo,
  bsfaLogo,
  bwgcLogo,
  carSaverLogo,
  mainLogo,
  jhuLogo,
  hotfmLogo,
  fastpaceLogo,
  ecoreLogo,
  mscLogo,
  tmLogo,
  towsonLogo,
  zooLogo,
} from "../../assets/images/logos";

// Comps
import PageLayout from "../../components/layout/PageLayout";
import SelectProjects from "./SelectProjects";

export default function Index() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { img: apertureLogo, name: "aperture" },
    { img: bambooLogo, name: "bamboo" },
    { img: brynLogo, name: "bryn" },
    { img: bsfaLogo, name: "bsfa" },
    { img: bwgcLogo, name: "bwgc" },
    { img: carSaverLogo, name: "carSaver" },
    { img: mainLogo, name: "main" },
    { img: jhuLogo, name: "jhu" },
    { img: hotfmLogo, name: "hotfm" },
    { img: fastpaceLogo, name: "fastpace" },
    { img: ecoreLogo, name: "ecore" },
    { img: mscLogo, name: "msc" },
    { img: tmLogo, name: "tm" },
    { img: towsonLogo, name: "towson" },
    { img: zooLogo, name: "zoo" },
  ];

  return (
    <React.Fragment>
      <PageLayout
        name="projects"
        animation={portVideo}
        heading1="Recent Projects"
        body1="Scroll down to check out some of my latest projects and recent exposure."
        heading2="Companies I've worked with"
        images={images}
        forecolor="#f9cb41"
        backcolor="#f1c231"
        darkcolor="#c9a021"
      >
        <SelectProjects />
      </PageLayout>
    </React.Fragment>
  );
}
