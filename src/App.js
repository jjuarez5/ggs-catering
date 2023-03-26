import "./App.css";
import Contact from "./Contact";
import Header from "./Header";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Home from "./Home";
import { Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
