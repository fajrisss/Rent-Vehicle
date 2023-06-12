/* eslint-disable no-unused-vars */
import { useState } from "react";
import CarList from "../components/CarList";
import Footer from "../components/Footer";
import Home from "../components/Home";
import MotorList from "../components/MotorList";
import Nav from "../components/Nav";
import Others from "../components/Others";

const Wrapper = () => {

  const [currentSection, setCurrentSection] = useState('section1');

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="">
      <div className="">
        <Nav className='' handleNavigation={handleNavigation} currentSection={currentSection}/>
        <div className="overflow-hidden h-full w-11/12 m-auto">
          {currentSection === 'home' && <Home  />}
          {currentSection === 'car' && <CarList />}
          {currentSection === 'motor' && <MotorList />}
          {currentSection === 'other' && <Others  />}
          
          {/* <MotorList /> */}
          {/* <Others /> */}
        </div>
          <Footer/>
        
      </div>
    </div>
  );
};

export default Wrapper;



