import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/my-logo.png'

function NavBar() {
  return (
    <React.Fragment>
        <div className='sticky inset-x-0 top-0 w-full z-30'>
          <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative'>
            <div className='flex items-center justify-between'>
              <div>
                <img src={logo} alt="Logo" className='h-15 w-20'/>
              </div>
              <nav>
                  <ul className='flex space-x-4 p-4 nav-links'>
                    <li><NavLink to={'#'}> About us</NavLink></li>
                    <li><NavLink to={'#'}> Features</NavLink></li>
                    <li><NavLink to={'#'}> Pricing</NavLink></li>
                  </ul>
              </nav>
              <div className='mr-5'>
                <NavLink to={'#'} className={'bg-green-500 px-4 py-2 rounded-md text-white'}>Login</NavLink>
                <NavLink to={'#'} className={'bg-blue-500 px-4 py-2 ml-2 rounded-md text-white'}>Sign Up</NavLink>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default NavBar
