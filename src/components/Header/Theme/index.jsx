import React from 'react';
import './style.css';
import { DarkMode } from './darkMode';

function Theme() {
  return (
    <div className="hidden lg:flex lg:items-center lg:justify-center">
      <div className="flex justify-center items-center ms-5">
        <div className="theme-version-animation">v1.1.0 <span className="theme-dots"></span> v1.2.0</div>
      </div>
      <div className='ms-5'>
        <DarkMode/>
      </div>
    </div>
  );
}

export default Theme;
