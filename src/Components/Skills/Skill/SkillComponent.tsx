import './SkillComponent.scss';
import { SkillComponentParameter } from '../../../Contracts/Parameter';
import Indicator from '../Indicator/Indicator';
import { Icon } from '@iconify/react';

const SkillComponent = ({ index, skill, className }: SkillComponentParameter) => {
  return (
    <div className={className + ' component'}>
      <div className="skill-info">
        <Icon icon={skill.icon} width="2.5rem" />
        <span className="skill-name">{skill.skillName}</span>
      </div>
      <Indicator id={index} value={skill.knowledge} />
    </div>
  );
};

export default SkillComponent;
