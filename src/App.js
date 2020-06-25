import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import ServicesSection from './components/ServicesSection';
import OffersSection from './components/OffersSection';
import Footer from './components/Footer'
import CoachSection from './components/CoachSection';
import { isTokenExist } from './api/GetUser';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

const App = () => {

  const [isLogin, setIsLogin] = useState(false)

  const editBtnRender = () => {
    let state = false;
    if (isTokenExist()) {
      state = true
    }
    setIsLogin(state)
  }

  useEffect(() => {
    editBtnRender()
  }, []);

  const showNotification = () => {
    store.addNotification({
      title: "Success",
      message: "Your changes were applied",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true
      }
    });
  }

  return (
    <div className="wrapper">
      <ReactNotification />
      <Header
        isUserLogined={isLogin}
        showNotification = {showNotification}
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
