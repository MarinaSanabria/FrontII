import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './components/Login';
import Registro from './components/Registro';
import Header from './components/Header';
import Footer from './components/Footer';
/*import ProjectRoutes from './components/ProjectRoutes'*/;



function App() {
  return (
    <BrowserRouter>

      <Header/>
     

      <Routes>
        <Route path="/"  />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;

/* function App() {
  return (
    <div className="App">
      <Header />
      <ProjectRoutes/>
      <Footer />
      
    </div>
  );
}

export default App; */
