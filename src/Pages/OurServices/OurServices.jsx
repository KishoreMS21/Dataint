import React from 'react'
import './OurServices.css'
import web from './img/web.svg';
import mobile from './img/mobile.svg'
import it from './img/itService.svg'
import erp from './img/Erp.svg'

export default function OurServices() {
  return (
    <div className='main-os'>
        <h1 className="title-os">What we’re <span>good</span> at?</h1>
        <p className='title-p'>We believe in your success and that we can help you achieve the best results for your business, regardless of your field.</p>
        <h1 className="title-ourServices">Our <span>Services</span></h1>
        <div className="types-services">
            <div className="Application">
                <img src={web} alt="" />
                <h3 className='service-name'>Web Application Development</h3>
                <p className="content-service">If you want a new website or already have one and you need upgrading, no matter what your need is we come with a website that truly reflects your business. Our web development services are fully compliant with SEO. </p>
            </div>
            <div className="Application">
                <img src={mobile} alt="" />
                <h3 className='service-name'>Mobile Application Development</h3>
                <p className="content-service">We offer high end mobile app development services. Whether it is a consumer oriented app or  enterprise app with solution, we have all the expertise you need to produce fully  reliable mobile application.</p>
            </div>
            <div className="Application">
                <img src={erp} alt="" />
                <h3 className='service-name'>ERP Application Development</h3>
                <p className="content-service">ERP Application Development  is a wide range  automation process for enterprise application of optimizing any enterprise. A wide  ranges from managing the ERP system to support and security related services.</p>
            </div>
            <div className="Application">
                <img src={it} alt="" />
                <h3 className='service-name'>IT Service</h3>
                <p className="content-service">We offered  a wide range of IT  services in Domain Registration and Hosting with website with annual maintenance 24 x7  with low cost.</p>
            </div>
        </div>
        {/* <div className="Application">
            <h2 className="service-name">Let us Help you</h2>
            <button className="contact-redirect">Contact</button>
        </div> */}
    </div>
  )
}
