import './App.css';

// React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
// O navigate será usado para fazer a checagem de autenticação.

//Pages

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
