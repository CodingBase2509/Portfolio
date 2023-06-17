import './LandingPage.scss';
import { BaseParameter } from '../../Contracts/Parameter';
import MainHeader from '../Shared/Text Blocks/MainHeader';
import SecondaryHeader from '../Shared/Text Blocks/SecondaryHeader';
import ProfileImage from './ProfileImage/ProfileImage';
import { FilledButton, OutlinedButton } from '../Shared/Buttons/Button';

import { MouseEvent } from 'react';

const LandingPage = ({ className }: BaseParameter) => {
  const handleNavigateToContact = (e: MouseEvent) => {
    e.preventDefault();
  };

  const handleDonwloadCV = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section className={className + ' ' + 'landing-page'}>
      <div className="name-header">
        <MainHeader className="wellcome-name">
          Hey, I&apos;m <br /> Fabian Dasler
        </MainHeader>
        <SecondaryHeader className="job-title">Fullstack Developer</SecondaryHeader>
      </div>
      <article>
        I am a full stack developer with a focus on C# and the .Net Core Framework. My passion is to develop solutions
        in the form of code. I also like to get excited about innovations and new things. Improving existing code or
        designs or use new technologies is awesome. From design to architecture planning to implementation in both the
        front and backend, I live for this job.
      </article>
      <div className="buttons">
        <FilledButton onClick={handleNavigateToContact}>Get in touch!</FilledButton>
        <OutlinedButton onClick={handleDonwloadCV}>Download CV</OutlinedButton>
      </div>
      <ProfileImage className="profile" />
    </section>
  );
};

export default LandingPage;
