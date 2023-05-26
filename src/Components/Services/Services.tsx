import "./Services.scss";

import { BaseParameter } from "../../Contracts/Parameter";
import MainHeader from "../Shared/Text Blocks/MainHeader";
import SecondaryHeader from "../Shared/Text Blocks/SecondaryHeader";

import { serviceItems } from "../../Data/ServiceCardItems";
import Card from "./Cards/Card";

const Services = ({ className }: BaseParameter) => {
  return (
    <section className={className + " " + "services"}>
      <SecondaryHeader>My Services</SecondaryHeader>
      <MainHeader>What I Do</MainHeader>
      <div className="card-section">
        {serviceItems.map((item, index) => (
          <Card key={index} serviceItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
