import React from 'react';
import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import ServicesSection from './components/ServicesSection';
import OffersSection from './components/OffersSection';
import Footer from './components/Footer'


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Banner/>
      <ServicesSection/>
      <OffersSection/>
      <Footer/>
    </div>
  );
}

export default App;
