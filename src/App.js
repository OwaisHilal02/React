import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contacts from "./pages/contacs";
import About from "./pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
