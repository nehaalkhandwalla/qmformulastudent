import {React, useState, useEffect} from 'react';
import './App.css';
import About from './About';
import FSintro from './FSintro';
import Contact from './Contact';
import teamimg from './assets/QMFS_2024_team.png';
// import gekko from './assets/gekko.jpeg';

function Home(){
  return(

      <div className="App">
        <header className="App-header" id='home'>
          <img src={teamimg} className="team-image" alt="2024 team" />
        </header>
        <section className="App-body" id="about">
          <div className="spacer">
          <About />
          </div>
          <div className="spacer">
          <img src={teamimg} className="team-image" alt="2024 team" />
          </div>
        </section>
        <section className="App-body" style={{paddingTop: 0}}>
          <FSintro />
        </section>
        <section className="App-body">
          <Contact />
        </section>
      </div>
  );

}export default Home;