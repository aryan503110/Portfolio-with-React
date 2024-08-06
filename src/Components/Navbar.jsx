import React, { useState } from 'react'
import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Navbar = () => {
  const [menu, setMenu] = useState("")
  return (
    <div className="navbar">
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink offset={50} href='#about' className='anchor-link' ><p onClick={()=>setMenu("about")}>About</p></AnchorLink></li>
            <li><AnchorLink offset={50} href='#contact' className='anchor-link' ><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect">
        <AnchorLink offset={50} href='#contact' className='anchor-link' ><p onClick={()=>setMenu("contact")}>Connect With Me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar
