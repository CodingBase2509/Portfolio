import { BaseParameter } from '../../Contracts/Parameter';
import Section from '../Shared/Section';
import './Resume.scss';

const Resume = ({ className }: BaseParameter) => {
  return (
    <Section className={className + ' resume'} mainHeader="About me" secondaryHeader="Resume">
      <div className="work-experience"></div>
      <div className="education"></div>
    </Section>
  );
};

export default Resume;
