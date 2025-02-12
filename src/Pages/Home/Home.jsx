import React from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import HeroSlider from '../../components/slider/Slider';
import About from '../../components/about/About';

const Home = () => {
  return (
    <main>
      <Header />
      <HeroSlider />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
