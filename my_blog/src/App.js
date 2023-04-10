import "./App.css";

// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
// O navigate será usado para fazer a checagem de autenticação.

//Pages

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
