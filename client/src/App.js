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


function App() {
  return (
    <React.Fragment>
      <SNavbar />
      <Banner />
     <Moves />
    <LifeStyle />
     <Classess />
      <Instructors />
     <DownloadPart />
   <VideoPart />
      <Feedback />
     <FAQS /> 
    </React.Fragment>
  );
}

export default App;
