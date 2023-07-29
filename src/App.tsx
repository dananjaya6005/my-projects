// App.tsx
import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './MainPage';
import Project from './screens/Project';
import Intro from './screens/Intro';
import Footer from './components/Footer';

function App() {
  const handleButtonClick = (index: any) => {
    // Function to handle button click
  };

  const divRef = useRef<HTMLDivElement>(null);

  const handleclick=()=>{
    divRef.current?.scrollIntoView({behavior : 'smooth'});
  }

  return (
    <>
      <Intro onButtonClick={handleButtonClick} handlNav={handleclick} />
      <div ref={divRef}>
        <Project />
        <div style={{height:"70px"}}></div>
        <Footer/>

      </div>
    </>
  );
}

export default App;
