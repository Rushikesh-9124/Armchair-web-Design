import React, { act, useState } from 'react'
import styles from './NavBar.module.css'
import { IoIosHeart } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";



function NavBar() {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex)
  return (
    <div className={styles.nav}>
      <div className={styles.topnav}>
        <div className={styles.left}>
            <button>MODERA</button>
            <input type="text"  placeholder='Armchairs'/>
            <CiSearch className={styles.search_icon} />

        </div>
        <div className={styles.right}>
            <button><FaAppStoreIos className={styles.app_icon}/> App</button>
            <button><IoIosHeart /></button>
            <button><FaBagShopping /></button>
            <p>Olivia Smith <FaRegUserCircle className={styles.icon}/> </p>
        </div>
      </div>
      <div className={styles.bottomnav}>
            <div className={styles.menu}>
                <HiMenuAlt2 className={styles.menu_icon}/>
            </div>
            <div className={styles.lists}>
                <ul>
                    {/* <li><a href="">Table</a></li>
                    <li><a href="">Sofa</a></li>
                    <li><a href="">Bed</a></li>
                    <li><a href="">Lamps</a></li>
                    <li><a href="">Speakers</a></li>
                    <li><a href="">Chairs</a></li> */}
                    {["Table", "Sofa", "Bed", "Lamps", "Spekers", "Chairs"].map((item, index) => (
                        <li key={index} className={index === activeIndex ? styles.active : ""} onClick={() => {setActiveIndex(index)}}>{item}</li>
                    ))}
                </ul>
            </div>
      </div>
    </div>
  )
}

export default NavBar
