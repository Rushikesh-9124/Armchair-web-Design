import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import sofa from './assets/sofa1.webp'
import { CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";

import sofa_top from './assets/sofa-top.jpg'
import sofa_bottom from './assets/sofa-bottom.jpg'
import { TbCirclePercentageFilled } from "react-icons/tb";
import { LuArrowUpRight } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";
import { FaUserInjured } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";



function App() {

  return (

    <div className='container'>
      <NavBar/>
      <div className="content-container">
        <div className="left">
          <div className="card-container">
            <div className="card">
              <img src={sofa} alt="sofa image" />
              <div className='prices'>
                <p>$302</p>
                <p>Armchair</p>
              </div>
              <div className="rating">
                <p><CiStar className='Cistar'/> 4.9</p>
              </div>
              <div className="cart">
                <button><FaHeart /></button>
                <button><FaBagShopping /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="middle-top">
            <img src={sofa_top} alt="" />
            <div className="text">
              <p>Great Value Deals</p>
              <p>Find deals with 50% - 60% off</p>
            </div>
            <div className="ratings">
              <p><TbCirclePercentageFilled /> 4.9</p>
            </div>
          </div>
          <div  className="middle-bottom">
            <img src={sofa_bottom} alt="" />

            <div className={`exclusive `}>
              <button>Exclusive</button>
              <p><span>Elegance Meets</span> Simplicity</p>
              <p>Upgrade your workspace with chairs that redifine modern simplicity</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-top">
            <div className="right-top-top">
              <button>OUR TEAM</button>
              <button><LuArrowUpRight /></button>
            </div>
            <p>Our team designs minimalist modern furniture</p>
            <div className="right-top-bottom">
              <ul>
                <li><FaUser /></li>
                <li><FaUserCircle /></li>
                <li><FaUserGraduate /></li>
                <li><FaUserSecret /></li>
                <li><FaUserInjured /></li>
              </ul>
            </div>
          </div>
          <div className="right-middle">
            <div className="right-middle-top">
              <button>JOIN NOW</button>
              <FiArrowUpRight className='arrow-cross'/>
            </div>
            <form action="">
              <input type="email"  placeholder='Email'/>
              <button type="submit">Subscribe</button>
            </form>

          </div>
          <div className="right-bottom">
          <div className="right-bottom-top">
              <button>OUR SHOP</button>
              <FiArrowUpRight className='arrow-cross'/>
            </div>
            <form action="">
              <textarea name="" id="" cols="30" rows="5" placeholder='type your message here'></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App
