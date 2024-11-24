import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Banner from '../Components/Banner/Banner'
import Products from '../Components/Products/Products'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <Products />
    <Outlet />
    </>
  )
}

export default Layout
