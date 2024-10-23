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


function App() {
  return (
    <React.Fragment>
      {/* <nav className={navbar ? 'navbar active' : 'navbar'}>  */}
      <SNavbar />
      <Banner />
      <Moves />
       <LifeStyle />
      {/* <Classess />
      <Instructors />
      <DownloadPart />
      <VideoPart />
      <Feedback /> */}
    </React.Fragment>
  );
}

export default App;
