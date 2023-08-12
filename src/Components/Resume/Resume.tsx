import './Resume.scss';
import { BaseParameter } from '../../Contracts/Parameter';
import Section from '../Shared/Section';
import { education, workExperience } from '../../Data/ResumeItems';
import ResumeSection from './ResumeSection/ResumeSection';

const Resume = ({ className }: BaseParameter) => {
  return (
    <Section className={className + ' resume'} mainHeader="About me" secondaryHeader="Resume">
      <div className="switch">
        <span className="header-span">
          <h2 className="resume-header-section">Work Experience</h2>
        </span>
        <span className="header-span">
          <h2 className="resume-header-section">Education</h2>
        </span>
      </div>

      <div className="resume-elements">
        <article className="work-experience">
          {workExperience.map((x, index) => (
            <ResumeSection key={index} item={x} indicator={true} />
          ))}
        </article>
        <article className="education">
          {education.map((x, index) => (
            <ResumeSection key={index} item={x} indicator={false} />
          ))}
        </article>
      </div>
    </Section>
  );
};

export default Resume;
