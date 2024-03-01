import React from 'react';
import './Clients.css';
import uts from './img/uts-final.png'
import ut from './img/ut-final.png';
// import rrsoft from './img/rsoft-logo.png';
// import onejob from './img/oneJobs.in.png'

export default function Clients() {
  return (
    <div className='Clients-main'>
        <h1 className="title-About">We <span>Helped</span> them!</h1>
        <p className='titleAbout-p'>We believe in your success and that big data can help you achieve the best results for your business, regardless of your field or target market. </p>
        <div className='customers'>
            <div className="customer-details">
              <img src={uts} alt=""  />
              <h1 className="customer-name">United Technology Services</h1>
            </div>
            <div className="customer-details">
              <img src={ut} alt="" />
              <h1 className="customer-name">United Technology </h1>
            </div>
            {/* <div className="customer-details">
              <img src={rrsoft} alt="" />
              <h1 className="customer-name">RSoft Technology</h1>
            </div>
            <div className="customer-details">
              <img src={onejob} alt="" />
              <h1 className="customer-name">ONEJOBS.IN</h1>
            </div> */}
        </div>
    </div>
  )
}
