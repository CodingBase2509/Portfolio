import "./App.scss";

import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main className="mainpage">
        <LandingPage className="app-section" />
        <Services />
        <Skills />
      </main>
    </>
  );
};

export default App;
