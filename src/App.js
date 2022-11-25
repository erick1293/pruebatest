import "./App.css";
import { Header } from "./Componentes/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Componentes/Footer";
import { Seccion1 } from "./Componentes/Seccion1";
import { Seccion2 } from "./Componentes/Seccion2";
import { Home } from "./Componentes/Home";
import { Seccion3 } from "./Componentes/Seccion3";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import "./assets/comp.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/seccion1" element={<Seccion1 />} />
          <Route path="/" element={<Home />} />
          <Route path="/seccion2" element={<Seccion2 />} />
          <Route path="/seccion3" element={<Seccion3 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
