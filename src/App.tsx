import "./App.scss";

import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";

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
