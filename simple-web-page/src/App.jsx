import Navigation_Bar from "./components/Navigation_Bar";
import ShowCase from "./components/ShowCase";
import NewsLetter from "./components/NewsLetter";
import CardSection from "./components/CardsSection";
import "./App.css";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
      ></link>
      ;
      <Navigation_Bar />
      <ShowCase />
      <NewsLetter />
      <CardSection />
    </>
  );
}

export default App;
