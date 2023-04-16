import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Content from '../../components/content/Content'

const Layout = () => {
  return (
    <div className='flex flex-1 flex-col h-screen w-screen bg-slate-100'>
        <Navbar />
        <Content/>
        <Footer/>

    </div>
  )
}

export default Layout