import { BaseParameter } from "../../../contracts/Parameter";
import MainHeader from "../../Elements/Text Blocks/MainHeader";
import SecondaryHeader from "../../Elements/Text Blocks/SecondaryHeader";
import "./LandingPage.scss";

const LandingPage = ({ className }: BaseParameter) => {
  return (
    <section className={className + " " + "landing-page"}>
      <MainHeader className="wellcome-name">
        Hey, I&apos;m <br /> Fabian Dasler
      </MainHeader>
      <SecondaryHeader>Fullstack Developer</SecondaryHeader>
      <article></article>
    </section>
  );
};

export default LandingPage;
