import React from 'react';
import './App.css';
import Header from './Synlogica/Header';
import Aboutus from './Synlogica/Aboutus';
import Contactus from './Synlogica/Contactus';
import Serviceus from './Synlogica/Serviceus';
import Clientsec from './Synlogica/Clientsec';
import ContactServices from './Synlogica/ContactServices';
import Home from './Synlogica/Home';





function App() {
  return (
    <div className="App">
      
      <Header />
        
      <Contactus />

      <Aboutus />
        
      <Serviceus />

      <Clientsec />

      <ContactServices />

      <Home />
  
    </div>
  );
}

export default App;
