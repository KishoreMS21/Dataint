import React from 'react';
import './NavBar.css';
import logo from './img/logo-dataint1-removebg-preview.png';
import menu from './img/menu_FILL0_wght400_GRAD0_opsz24.png';
import close from './img/close_FILL0_wght400_GRAD0_opsz24.png'
import HeroSection from '../HeroSection/HeroSection';
import AboutPage from '../AboutPage/AboutPage';
import OurServices from '../OurServices/OurServices';
import Contact from '../Contact/Contact';

function NavBar() {

    function onClickMenu(){
        const sideBar = document.querySelector('.side-nav');
        sideBar.style.display='flex'
    }
    function onClickClose(){
        const sideBar = document.querySelector('.side-nav');
        sideBar.style.display='none'
    }

  return (
    <div className='navBar-total'>
        <ul className="main-nav">
            <li className="main-navLi"><a href={<HeroSection />}><img className='logo' src={logo} alt="" /></a></li>
            <li className="main-navLi"><a href={<AboutPage />} className="nav-a">About</a></li>
            <li className="main-navLi"><a href={<OurServices />} className="nav-a">Services</a></li>
            <li className="main-navLi"><a href={<Contact/>} className="nav-a">Contact</a></li>
            <li onClick={onClickMenu} ><a href='#menu' className='menu-btn'><img src={menu} alt="" /></a></li>
        </ul>

        <ul className="side-nav">
            <li onClick={onClickClose} className="side-navLi"><a href='#close'><img className='close' src={close} alt="" /></a></li>
            <li className="side-navLi"><a href={<AboutPage />} className="nav-a">About</a></li>
            <li className="side-navLi"><a href={<OurServices />} className="nav-a">Services</a></li>
            <li className="side-navLi"><a href={<Contact />} className="nav-a">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavBar