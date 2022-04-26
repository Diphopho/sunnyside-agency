import "./App.css";
import {
  Footer,
  Header,
  About,
  Project,
  Services,
  Testimony,
} from "./Container";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    anchorPlacement: "top-center",
  });
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Testimony />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
