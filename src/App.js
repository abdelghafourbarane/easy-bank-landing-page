import ArticlesContainer from "./components/articles-container/ArticlesContainer.component";
import FeaturesContainer from "./components/features-container/FeaturesContainer.component";
import Header from "./components/header/Header.component";
import MainContainer from "./components/main-container/MainContainer.component";
import Mockup from "./components/mockup/Mockup.component";

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
      <Mockup />
      <FeaturesContainer />
      <ArticlesContainer />
    </div>
  );
}

export default App;
