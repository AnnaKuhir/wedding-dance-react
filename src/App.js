import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import ServicesSection from './components/ServicesSection/ServicesSection';


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Banner/>
      <ServicesSection/>
    </div>
  );
}

export default App;
