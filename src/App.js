import "./App.css";

// React Router
// O navigate será usado para fazer a checagem de autenticação.
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import CreatePost from "./Pages/CreatePost/CreatePost";
import Dashboard from "./Pages/Dashboard/Dashboard";

//context
import { AuthProvider } from "./context/AuthContext";

function App() {
  
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])
  
  if(loadingUser) {
    return <p>Carregando...</p>
  }
  return (
    <div className="App">
      <AuthProvider value={{user}}>
      <BrowserRouter>
      <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
