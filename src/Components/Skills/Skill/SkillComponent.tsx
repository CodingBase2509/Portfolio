import SkillItem from "../../../Contracts/SkillItem";
import "./SkillComponent.scss";

const SkillComponent = ({ icon, skillName, knowledge}: SkillItem) => {
  return (
    <div>
      <i className={icon}></i>
    </div>
  );
};

export default SkillComponent;
