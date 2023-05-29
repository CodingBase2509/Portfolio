import "./Section.scss";

import { SectionParameter } from "../../Contracts/Parameter";
import MainHeader from "./Text Blocks/MainHeader";
import SecondaryHeader from "./Text Blocks/SecondaryHeader";

const Section = ({
  className,
  secondaryHeader,
  mainHeader,
  children,
}: SectionParameter) => {
  return (
    <section className={className + " " + "section"}>
      <SecondaryHeader>{secondaryHeader}</SecondaryHeader>
      <MainHeader>{mainHeader}</MainHeader>
      {children}
    </section>
  );
};

export default Section;
