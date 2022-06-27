import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

  

  const [active, setActive]= useState('nav__menu')
  const [toggleIcon, setToggleIcon]= useState('nav__toggler')



  const navToggle=()=>{
    active === 'nav__menu'? setActive('nav__menu nav__active '): setActive('nav__menu')
    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle'): setToggleIcon('nav__toggler')
  }

  return (

    <nav className="nav">
      <Link className="nav__brand" to="/">Logo</Link>
      <ul className={active}>
        {/* <li className="nav__item"><Link className="nav__link" to="/">Home</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/Documentary">Documentary</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/Family">Family</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/Animation">Animation</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/Drama">Drama</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/Horror">Horror</Link></li> */}
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

    )
}

export default Navbar