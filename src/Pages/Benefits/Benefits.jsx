import React from 'react';
import "./Benefits.css";
import clients from './img/client.svg';
import increased from './img/increased.svg';
import process from './img/ProcessAuto.svg';
import data from './img/data-driven.svg';
import reduced from './img/reduced.svg';
import market from './img/market.svg'

export default function Benefits() {
  return (
    <div className='Benefits-contents'>
        <h1 className="title-os">How will you get <span>benefit?</span></h1>
        <p className='title-p'>Understanding the overarching trends of your business and overall market saves you time, money and energy in the long run, and can help you dominate your market. </p>
        <div className="types-services">
            <div className="Benefits">
                <img src={clients} alt="" />
                <h3 className='service-name'>Client</h3>
            </div>
            <div className="Benefits">
                <img src={increased} alt="" />
                <h3 className='service-name'>Increased Efficiency</h3>
            </div>
            <div className="Benefits">
                <img src={process} alt="" />
                <h3 className='service-name'>Process Automation</h3>
            </div>
            <div className="Benefits">
                <img src={data} alt="" />
                <h3 className='service-name'>Data-Driven Innovation</h3>
            </div>
            <div className="Benefits">
                <img src={reduced} alt="" />
                <h3 className='service-name'>Reduced Costs</h3>
            </div>
            <div className="Benefits">
                <img src={market} alt="" />
                <h3 className='service-name'>Market Insights</h3>
            </div>
        </div>
    </div>
  )
}
