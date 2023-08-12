import './ResumeSection.scss';
import { ResumeSectionParameter } from '../../../Contracts/Parameter';

const ResumeSection = ({ className, item, indicator }: ResumeSectionParameter) => {
  return (
    <section className={className + ' resume-section'}>
      {indicator ?? <div className="indicator"></div>}
      <div className="data">
        <div className="headline">
          <span className="institution">{item.institution}</span>

          {item.to ? (
            <span className="dates">
              <span>{item.from}</span> - <span>{item.to}</span>
            </span>
          ) : (
            <span className="dates">
              Seit <span>{item.from}</span>
            </span>
          )}
        </div>

        <h3 className="title">{item.title}</h3>
        <div className="describtion">{item.describtion}</div>
      </div>
    </section>
  );
};

export default ResumeSection;
