import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import Header from './components/Header';
import Footer from './components/Footer';
import GMAP from './components/GMap';


import Home from './pages/Home';
import Committee from './pages/committee';
import Keynotes from './pages/keynotes';
import Registration from './pages/registration';
import Author from './pages/authors';
import Paper from './pages/paper';
import Schedule from './pages/schedule';
import Faq from './pages/faq';
import CFP from './pages/cfp';
import Publications from './pages/publication.js';
import SS from './pages/ss';
import OAS from './pages/oas';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
        <Routes>  
          <Route path='/' element={<Home />} />
          <Route path='/committee' element={<Committee />} />
          <Route path='/keynotes' element={<Keynotes />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/paper-submission/authors' element={<Author />} />
          <Route path='/paper-submission/paper' element={<Paper />} />
          <Route path='/paper-submission/schedule' element={<Schedule />} />
          <Route path='/paper-submission/faq' element={<Faq />} />
          <Route path='/call-for-papers' element={<CFP />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/special-session' element={<SS />} />
          <Route path='/our-associate-sponors' element={<OAS />} />
        </Routes>
      <GMAP />
      <Footer />
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


