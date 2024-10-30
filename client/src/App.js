import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Classess from './components/Classess/Classess';

import Instructors from './components/Instructors/Instructors';

import SNavbar from './components/Navbar/SNavbar';
import VideoPart from './components/Videopart/VideoPart';

import Footer from './components/Footer/Footer';
import HomeComponent from './components/FAQS/HomeComponent';
import Strength from './components/ClassesDetails/Strength';
import BurnOut from './components/ClassesDetails/BurnOut';
import BootCamp from './components/ClassesDetails/BootCamp';

function App() {
  return (
    <React.Fragment>
      <Router>
        <SNavbar />
        <div id="banner"><Banner /></div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/Classes" element={<Classess />} />
          <Route path="/team" element={<Instructors />} />
          <Route path="/about-us" element={<VideoPart />} />
          <Route path="/Strength" element={<Strength />} />
          <Route path="/BurnOut" element={<BurnOut />} />
          <Route path="/BootCamp" element={<BootCamp />} />

        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
