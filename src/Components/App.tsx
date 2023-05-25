import "./App.scss";

import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";

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
