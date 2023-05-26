import "./Card.scss";
import { BaseParameter } from "../../../Contracts/Parameter";
import SerivceItem from "../../../Contracts/ServiceItem";

interface ServiceCardParameter extends BaseParameter {
  serviceItem: SerivceItem;
}

export const Card = ({ className, serviceItem }: ServiceCardParameter) => {
  return (
    <div className={className + " " + "card"}>
      {serviceItem.imageComponent()}
      <div className="card-text-container">
        <h3 className="card-title">{serviceItem.title}</h3>
        <article className="card-text">{serviceItem.text}</article>
        <span className="card-link">
          <a>{serviceItem.navLink}</a>
        </span>
      </div>
    </div>
  );
};

export default Card;
