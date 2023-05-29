import "./Skills.scss";

import { BaseParameter } from "../../Contracts/Parameter";
import Section from "../Shared/Section";

const Skills = ({ className }: BaseParameter) => {
  return (
    <Section
      className={className + " skills"}
      secondaryHeader="About Me"
      mainHeader="Skills"
    >
      {}
    </Section>
  );
};

export default Skills;
