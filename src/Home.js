import logo from './logo_qmfs.png';
import {React, useState, useEffect} from 'react';
import './App.css';
import About from './About';
import teamimg from './assets/QMFS_2024_team.png';

function Home(){
  return(

      <div className="App">
        <header className="App-header">
          <img src={teamimg} className="App-logo" alt="2024 team" />
        </header>
        <div className="App-body">
          <About />
        </div>
      </div>
  );

}export default Home;