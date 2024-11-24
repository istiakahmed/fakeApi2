import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <>
    <nav className='apiNav'>
        <div className="container">
            <div className="apiNav_row">
                <div className="apiNav_logo">
                    <img src="Images/api_logo.png" alt="logo" />
                    <span>Platzi Fake Store Api</span>
                </div>
                <div className="apiNav_seaarch">
                    <CiSearch />
                    <input type="text" placeholder='Search' />
                    

                </div>
            </div>
        </div>

    </nav>

    </>
  )
}

export default Navbar
