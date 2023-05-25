import "./Card.scss";
import { BaseParameter } from "../../../Contracts/Parameter";
import SerivceItem from "../../../Contracts/ServiceItem";

interface ServiceCardParameter extends BaseParameter {
  serviceItem: SerivceItem;
}

export const Card = ({ className, serviceItem }: ServiceCardParameter) => {
  return (
    <div className={className}>
      {serviceItem.imageComponent()}
      <title>{serviceItem.title}</title>
      <article>{serviceItem.text}</article>
      <span>
        <a>{serviceItem.navLink}</a>
      </span>
    </div>
  );
};

export default Card;
