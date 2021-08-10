import { useState } from "react";

import ArticlesContainer from "./components/articles-container/ArticlesContainer.component";
import FeaturesContainer from "./components/features-container/FeaturesContainer.component";
import Footer from "./components/footer/Footer.component";
import Header from "./components/header/Header.component";
import MainContainer from "./components/main-container/MainContainer.component";
import Mockup from "./components/mockup/Mockup.component";
import Modal from "./components/modal/modal.component";

import "./App.css";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);

  const menuClickedHandler = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <div className="App">
      <Header clickMenu={menuClickedHandler} />
      <MainContainer />
      <Mockup />
      <FeaturesContainer />
      <ArticlesContainer />
      <Footer />
      {menuClicked && <Modal />}
    </div>
  );
}

export default App;
