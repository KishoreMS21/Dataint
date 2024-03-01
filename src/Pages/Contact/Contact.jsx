import React from 'react';
import "./Contact.css";

export default function Contact() {
  return (
    <div className='Contact-main'>
        <h2 className='location'>Contact <span>Us</span></h2>
        <div className='Contact-content'>
            <div className="contact-address">
                <h1 className='heading-name'>Locat<span>ion</span></h1>
                <p>Set up a meeting with our consultants, or simply stop by if you're in the neighborhood.</p>
                <address>3A,Barnes Lane,Dronfield,S18 8YE,UK</address>
            </div>
            <div className='Contact-details'>
                <h1>Contact <span>Us</span></h1>
                <div className="p">
                    {/* <p>Name: M.GnanaVel</p>
                    <p>Contact: 8825484318</p> */}
                    <p>Email: info@dataint.in</p>
                </div>
            </div>
        </div>
    </div>
  )
}
