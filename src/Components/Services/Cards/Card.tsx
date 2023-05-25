import "./Card.scss";
import { BaseParameter } from "../../../contracts/Parameter";
import SerivceItem from "../../../contracts/ServiceItem";

interface ServiceCardParameter extends BaseParameter {
  serviceItem: SerivceItem;
}

export const Card = ({ className, serviceItem }: ServiceCardParameter) => {
  return <div className={className}></div>;
};

export default Card;
