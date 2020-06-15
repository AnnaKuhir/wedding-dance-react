import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import ServicesSection from './components/ServicesSection/ServicesSection';
import OffersSection from './components/OffersSection/OffersSection';


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Banner/>
      <ServicesSection/>
      <OffersSection/>
    </div>
  );
}

export default App;
