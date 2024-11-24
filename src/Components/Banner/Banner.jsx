import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";


const Banner = () => {
  return (
    <>
    <div id='apiBanner'>
        <div className="container">
            <div className="apiBanner_row">
                <div className="apiBanner_text">
                    <h1>Platzi Fake Store API </h1>
                    <p>Your API for your e-commerce or shopping website prototype.
                    </p>
                    <Link to={'#'}>View Docs <FaArrowRight /></Link>
                </div>
                <div className="apiBanner_image">
                    <img src="Images/workgirl.png" alt="image" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner
