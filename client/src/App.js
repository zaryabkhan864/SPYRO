import React from 'react';
import Banner from './components/Banner/Banner';
import Classess from './components/Classess/Classess';
import DownloadPart from './components/DownloadPart/DownloadPart';
import Feedback from './components/FeedBack/Feedback';
import Instructors from './components/Instructors/Instructors';
import LifeStyle from './components/LifeStyle/LifeStyle';
import Moves from './components/Moves/Moves';
import SNavbar from './components/Navbar/SNavbar';
import VideoPart from './components/Videopart/VideoPart';
import FAQS from './components/FAQS/FAQS';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <SNavbar />
      <div id="banner"><Banner /></div>
      <div id="moves"><Moves /></div>
      <div id="lifestyle"><LifeStyle /></div>
      <div id="classess"><Classess /></div>
      <div id="instructors"><Instructors /></div>
      <div id="download"><DownloadPart /></div>
      <div id="video"><VideoPart /></div>
      <div id="feedback"><Feedback /></div>
      <div id="faqs"><FAQS /></div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
