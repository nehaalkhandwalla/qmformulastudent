import logo from './logo_qmfs.png';
import './App.css';

function Home(){
  return(
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            QUEEN MARY FORMULA STUDENT PAGE!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );

}export default Home;