import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/header/header";
import About from "./Components/about/about";
import Details from "./Components/details/details";
import SecondHeader from "./Components/second_header/second";
import Footer from "./Components/footer/footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Details />
      <SecondHeader />
      <Details />
      <Footer />
    </>
  );
};
export default App;
