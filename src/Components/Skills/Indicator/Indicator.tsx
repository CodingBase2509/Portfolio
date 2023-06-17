import './Indicator.scss';
import { IndicatorParameter } from '../../../Contracts/Parameter';

const Indicator = ({ className, value, id }: IndicatorParameter) => {
  const setProgressBar = () => {
    const progressbar = document.getElementById('progressbar' + id);
    if (!progressbar) return;
    progressbar.style.width = value * 10 + '%';
  };

  setTimeout(setProgressBar, 100);

  return (
    <div className={className + ' progressbar-container'}>
      <div id={'progressbar' + id} className="progressbar"></div>
    </div>
  );
};

export default Indicator;
