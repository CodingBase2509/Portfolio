import './Skills.scss';

import { BaseParameter } from '../../Contracts/Parameter';
import Section from '../Shared/Section';
import SkillComponent from './Skill/SkillComponent';
import { SkillItems } from '../../Data/SkillItems';

const Skills = ({ className }: BaseParameter) => {
  const skillPosition = (index: number) => {
    let result = 'skill';
    switch (index % 2) {
      case 0:
        result += 'left';
        break;
      default:
        result += 'right';
        break;
    }
    return result;
  };

  return (
    <Section className={className} secondaryHeader="About Me" mainHeader="Skills">
      <div className="skill-section">
        {SkillItems.map((item, index) => (
          <SkillComponent className={skillPosition(index)} key={index} index={index} skill={item} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
