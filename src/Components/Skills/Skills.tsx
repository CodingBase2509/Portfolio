import './Skills.scss';

import { BaseParameter } from '../../Contracts/Parameter';
import Section from '../Shared/Section';
import SkillComponent from './Skill/SkillComponent';
import { SkillItems } from '../../Data/SkillItems';

const Skills = ({ className }: BaseParameter) => {
  return (
    <Section className={className + ' skills'} secondaryHeader="About Me" mainHeader="Skills">
      {SkillItems.map((item, index) => (
        <SkillComponent key={index} index={index} skill={item} />
      ))}
    </Section>
  );
};

export default Skills;
