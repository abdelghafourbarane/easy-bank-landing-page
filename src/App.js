import ArticlesContainer from "./components/articles-container/ArticlesContainer.component";
import FeaturesContainer from "./components/features-container/FeaturesContainer.component";
import Footer from "./components/footer/Footer.component";
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
      <Footer />
    </div>
  );
}

export default App;
