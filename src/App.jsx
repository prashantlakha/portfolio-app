import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Education,
  StarsCanvas,
  Resume,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          {/* <Banner /> */}
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <Resume />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
