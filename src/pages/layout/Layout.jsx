import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Content from '../../components/content/Content'

const Layout = (props) => {
  return (
    <div className='flex flex-1 flex-col h-screen w-screen bg-slate-100 overflow-auto'>
        <Navbar />
        <div className='w-full h-full bg-white overflow-auto'>
          {props.children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout