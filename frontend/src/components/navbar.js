import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import '../App.css'
import { useState, useContext, useEffect } from 'react'
import authHandler from '../features/AuthHandler'
import { AuthContext } from '../features/AuthContext'

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
          <Link className='nav-link link-dark px-2 active' to={'/'}>
            Radiance Fest
          </Link>
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
              <button className='btn'>
                <li>
                  <Link to='/login' className='nav-link link-dark px-2 active'>
                    <FaSignInAlt /> Login
                  </Link>
                </li>
              </button>
              <button className='btn'>
                <li>
                  <Link to={'/register'} className='link-dark px-2'>
                    <FaUser /> RSVP
                  </Link>
                </li>
              </button>
            </>
          )}
        </ul>
      </div>
      <div className='second-line'>
        <ul>
          <li>
            <Link to='/about' className='nav-link link-dark px-2 active'>
              About{' '}
            </Link>
          </li>
          <li>
            <Link to='/contact' className='nav-link link-dark px-2 active'>
              Contact{' '}
            </Link>
          </li>
          <li>
            <Link to='/faqs' className='nav-link link-dark px-2 active'>
              FAQs{' '}
            </Link>
          </li>
          <li>
            <Link to='/gallery' className='nav-link link-dark px-2 active'>
              Photo Gallery{' '}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
