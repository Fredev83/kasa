import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Logement from "./pages/Logement/Logement";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          {/*path="*" fonctionne si jamais l'url ne correspond Ã  rien de dÃ©clarÃ© au dessus*/}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;