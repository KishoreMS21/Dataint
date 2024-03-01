import React from 'react';
import "./Footer.css";
import endLogo from './img/logo-dataint1-removebg-preview.png';
export default function Footer() {
  return (
    <div className='Footer-main'>
        <img src={endLogo} alt="" className="end-img" />
        <h3 className='end'>@2024,  DataInt Software Private Limited</h3>
    </div>
  )
}
