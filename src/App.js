import "./scss/index.scss";
import Footer from "./section/Footer";
import Home from "./section/Home";
import Navbar from "./section/Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
