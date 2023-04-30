import "./App.scss";

import Header from "./Components/Sections/Header/Header";
import LandingPage from "./Components/Sections/LandingPage/LandingPage";

const App = () => {
  return (
    <>
      <Header />
      <main className="mainpage">
        <LandingPage />
      </main>
    </>
  );
};

export default App;
