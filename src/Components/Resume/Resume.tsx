import { BaseParameter } from '../../Contracts/Parameter';
import Section from '../Shared/Section';
import './Resume.scss';

const Resume = ({ className }: BaseParameter) => {
  return (
    <Section className={className + ' resume'} mainHeader="About me" secondaryHeader="Resume">
      <div className="switch">
        <span>Work Experience</span>
        <span>Education</span>
      </div>
      <article className="work-experience"></article>
      <article className="education"></article>
    </Section>
  );
};

export default Resume;
