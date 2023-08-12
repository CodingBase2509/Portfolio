import './Services.scss';

import { BaseParameter } from '../../Contracts/Parameter';

import { serviceItems } from '../../Data/ServiceCardItems';
import Card from './Cards/Card';
import Section from '../Shared/Section';

const Services = ({ className }: BaseParameter) => {
  return (
    <div className="service-container">
      <Section className={className + ' ' + 'services'} secondaryHeader="My Services" mainHeader="What I Do">
        <div className="card-section">
          {serviceItems.map((item, index) => (
            <Card key={index} serviceItem={item} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
