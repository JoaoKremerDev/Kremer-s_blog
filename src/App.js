import "./App.css";

// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// O navigate será usado para fazer a checagem de autenticação.

//Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

//context
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
