import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Footer from './components/footer';
import '../src/components/navigation.css';
import Projects from './components/projects';
import About from './components/aboutme';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-bar">
        <Navigation/>
        </nav>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <code className ="Arrow-function"> => </code> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          need to change this link
        </a>
      </header>
      <div> <About/> </div>
      <div><Projects/></div>
      <footer> 
        <Footer/>
       </footer>
    </div>
  );
}

export default App;
