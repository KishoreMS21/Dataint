import React from 'react';
import "./AboutPage.css";
import gobal from './img/global.svg';
import quality from './img/quality.svg';
import favorable from './img/favorable.svg';
import highStandard from './img/highStandard.svg'

export default function AboutPage() {
  return (
    <div className='AboutPage-main'>
        <h1 className="title-About">Why <span>Choose</span> us?</h1>
        <p className='titleAbout-p'>We believe in your success and that big data can help you achieve the best results for your business, regardless of your field or target market. </p>
        <div className="why-we">
            <div className="Application">
                <img src={gobal} alt="" />
                <h3 className='about-skills'>Global experience</h3>
                <p className="content-About"> worked with multinational companies, as well as smaller businesses from all continents. </p>
            </div>
            <div className="Application">
                <img src={quality} alt="" />
                <h3 className='about-skills'>Quality for value</h3>
                <p className="content-About">Our motto is to provide only the highest quality to our clients, no matter the circumstances.</p>
            </div>
            <div className="Application">
                <img src={favorable} alt="" />
                <h3 className='about-skills'>Favorable terms</h3>
                <p className="content-About">h project we work on is tailored to the particular client's exact needs, not the other way around.</p>
            </div>
            <div className="Application">
                <img src={highStandard} alt="" />
                <h3 className='about-skills'>High standards</h3>
                <p className="content-About">We take data seriously, meaning that we only deliver work that we can be proud of.</p>
            </div>
        </div>
    </div>
  )
}
