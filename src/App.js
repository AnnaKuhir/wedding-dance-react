import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import ServicesSection from './components/ServicesSection';
import OffersSection from './components/OffersSection';
import Footer from './components/Footer'
import CoachSection from './components/CoachSection/CoachSection';
import { isTokenExist } from './api/GetUser';


const App = () => {
  // const [userLogined, setUserLogined] = useState(false);

  const [isLogin, setIsLogin] = useState(false)

  const  editBtnRender = () => {
    let state = false;
    if (isTokenExist()) {
      state = true
    }
    setIsLogin(state)
  }

  useEffect(() => {
    editBtnRender()
  }, []);

  return (
    <div className="wrapper">
      <Header
        isUserLogined={isLogin}
      />
      <Banner />
      <ServicesSection />
      <OffersSection />
      <CoachSection />
      <Footer />
    </div>
  );
}

export default App;
