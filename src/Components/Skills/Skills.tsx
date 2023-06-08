import "./Skills.scss";

import { BaseParameter } from "../../Contracts/Parameter";
import Section from "../Shared/Section";
import Indicator from "./Indicator/Indicator";

const Skills = ({ className }: BaseParameter) => {
  return (
    <Section
      className={className + " skills"}
      secondaryHeader="About Me"
      mainHeader="Skills"
    >
      <Indicator id={1} value={5}></Indicator>
    </Section>
  );
};

export default Skills;
