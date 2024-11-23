import React from 'react';
import './Header.css';
import logo from './logo.png';
export default function Header() {
  return (
    <div className='head'>
      <div className='logo'>
    <img src={logo} alt='logo' />
      </div>
      {/**************************************************/}
      <div className='links'>
        <a href="#" >home</a>
        <a href="#">about</a>
        <a href="#">contact</a>
        <a href="#">FQA</a>
      </div>
      
    </div>
  )
}
