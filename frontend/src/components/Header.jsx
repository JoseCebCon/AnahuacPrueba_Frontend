import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

import Logo from '../images/logo.png'
import {UserContext} from '../context/userContext'


const Header = () => {
  const {currentUser} = useContext(UserContext)
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false)


  const closeNavHandler = () => {
      if(window.innerWidth < 800) {
        setIsNavShowing(false);
      } else {
        setIsNavShowing(true)
      }
    }

  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='nav__logo' onClick={closeNavHandler}>
              <img src={Logo} alt="Navbar Logo" />
            </Link>

            <div className="nav__title">
            <h1>Trxperience</h1>
            </div>
            
            {!currentUser?.id && isNavShowing && <ul className='nav__menu'>
                <li><Link to={'/authors'} onClick={closeNavHandler}>Members</Link></li>
                <li><Link to={'/login'} onClick={closeNavHandler}>Login</Link></li>
            </ul>}
            {currentUser?.id && isNavShowing && <ul className='nav__menu'>
                <li><Link to={`/profile/${currentUser?.id}`} onClick={closeNavHandler}>{currentUser?.name}</Link></li>
                <li><Link to={'/create'} onClick={closeNavHandler}>Create Remember</Link></li>
                <li><Link to={'/authors'} onClick={closeNavHandler}>Members</Link></li>
                <li><Link to={'/logout'} onClick={closeNavHandler}>Logout</Link></li>
            </ul>}

            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>{isNavShowing ? <AiOutlineClose/> : <FaBars/>}</button>
        </div>
    </nav>
  )
}

export default Header