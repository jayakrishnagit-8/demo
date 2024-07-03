import './App.css';
import Header from './task27_05/Header';


function App() {
  function Aboutus() {
    return(
      <div id='abtus' class="aboutusc">
        <h1 class="abouthead">About Us</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt.</p>
      </div>
    )
  }
  function Services() {
    return(
      <div>
        <a class="servicesc" href='#'>Services</a>
      </div>
    )
  }
  function About() {
    return(
      <div>
        <a class="aboutc" href='abtus'>About</a>
      </div>
    )
  }
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Aboutus />
    </div>
  );
}

export default App;
