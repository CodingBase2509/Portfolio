import "./App.scss";

import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import Services from "./Services/Services";

const App = () => {
  return (
    <>
      <Header />
      <main className="mainpage">
        <LandingPage className="app-section" />
        <Services className="app-section" />
      </main>
    </>
  );
};

export default App;
