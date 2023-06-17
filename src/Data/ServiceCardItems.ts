import SerivceItem from '../Contracts/ServiceItem';
import Data from '../Components/Services/Cards/Images/Data';
import Mobile from '../Components/Services/Cards/Images/Mobile';
import WebDesign from '../Components/Services/Cards/Images/WebDesign';
import WebDev from '../Components/Services/Cards/Images/WebDev';

export const serviceItems: Array<SerivceItem> = [
  {
    title: 'Web Design',
    text: 'I create responsive Websites for all youre needs. No matter if it is with plain HTML, CSS and Javascript, a framework like React or a Websitebuilder like Wordpress. ',
    imageComponent: WebDesign,
    navLink: '',
  },
  {
    title: 'Web Development',
    text: 'I create responsive Websites for all youre needs. No matter if it is with plain HTML, CSS and Javascript, a framework like React or a Websitebuilder like Wordpress. ',
    imageComponent: WebDev,
    navLink: '',
  },
  {
    title: 'App Development',
    text: 'I create responsive Websites for all youre needs. No matter if it is with plain HTML, CSS and Javascript, a framework like React or a Websitebuilder like Wordpress. ',
    imageComponent: Mobile,
    navLink: '',
  },
  {
    title: 'Backend Development',
    text: 'I create responsive Websites for all youre needs. No matter if it is with plain HTML, CSS and Javascript, a framework like React or a Websitebuilder like Wordpress. ',
    imageComponent: Data,
    navLink: '',
  },
];
