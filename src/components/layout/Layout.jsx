import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      {/* <Navbar/> */}
      <div className='--pad' style={{minHeight: '80vh'}}>
          {children}
      </div>
      <Footer/>
    </>
  )
}

export default Layout