import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import '../App.css'
import { useState, useContext, useEffect } from 'react'
import authHandler from '../features/authHandler'
import { AuthContext } from '../features/authContext'

export default function Navbar () {
  // Get user from localStorage
  const { user, setUser } = useContext(AuthContext)
  // console.log(user)

  function HandleClick () {
    authHandler.LogoutHandler(setUser)
    // setUser(JSON.parse(localStorage.getItem('user')))
  }

  return (
    <div className='header'>
      <div className='heading'>
        <h2 className='heading-text'>
          <Link to={'/'}>Radiance Fest</Link>
        </h2>
        <ul>
          {user ? (
            <button className='btn' onClick={HandleClick}>
              <li>
                <FaSignOutAlt /> Logout
              </li>
            </button>
          ) : (
            <>
              <li>
                <Link to='/login'>
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  <FaUser /> RSVP
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className='second-line'>
        <ul>
          <li>
            <Link to='/about'>About </Link>
          </li>
          <li>
            <Link to='/contact'>Contact </Link>
          </li>
          <li>
            <Link to='/faqs'>FAQs </Link>
          </li>
          <li>
            <Link to='/gallery'>Photo Gallery </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
