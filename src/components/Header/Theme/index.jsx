import React from 'react';
import './style.css';

function Theme() {
  return (
    <div className="hidden lg:flex lg:items-center lg:justify-center">
      <div className="flex justify-center items-center ms-5">
        <div className="theme-version-animation">v1.0.0 <span className="theme-dots"></span> v1.0.1</div>
      </div>
    </div>
  );
}

export default Theme;
