// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        Weather App &copy; {new Date().getFullYear()} | Powered by{' '}
        <a href='https://openweathermap.org/' target='_blank' rel='noopener noreferrer'>
          OpenWeatherMap
        </a>
      </p>
    </footer>
  );
};

export default Footer;
