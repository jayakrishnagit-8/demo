import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './task14_06/Nav';
import Home from './task14_06/Home';
import Users from './task14_06/Users';
import Apply from './task14_06/Apply';
import Contact from './task14_06/Contact';
import Page404 from './task14_06/Page404';

 

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
