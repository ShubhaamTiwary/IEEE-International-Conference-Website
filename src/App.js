import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
        <Routes>  
          <Route path='/' element={<Home />} />
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

// Header 
// Navber

// home == > 1.image slider
      //     2.Text slider
      //     3.About Conference
      //     4. Contact Details
      //     5. Map

// Footer


