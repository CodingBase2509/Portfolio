import './App.scss';

import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Services from './Services/Services';
import Resume from './Resume/Resume';
import SectionLine from './Shared/SectionLine';
import Skills from './Skills/Skills';

const App = () => {
  return (
    <>
      <Header />
      <main className="mainpage">
        <LandingPage className="app-section" />
        <Services className="app-section" />
        <Skills className="app-section" />
        <SectionLine />
        <Resume className="app-section" />
      </main>
    </>
  );
};

export default App;
