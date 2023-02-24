import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";



function App(): JSX.Element {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Technologies/>
      <SocialLinks/>
    </div>
  );
}

export default App;
