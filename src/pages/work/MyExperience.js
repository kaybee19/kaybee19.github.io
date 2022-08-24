import React from "react";
import { workExp } from "../../utils/workExperience";
import "./MyExperience.scss";

// Comps
import Experience from "./Experience";

export default function MyExperience() {
  return (
    <div className="experience">
      {workExp.map((exp, i) => (
        <Experience exp={exp} key={i} />
      ))}
    </div>
  );
}
