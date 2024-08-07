import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <HeroSection/>
    </React.Fragment>
  );
}

export default App;
