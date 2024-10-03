import { Outlet } from 'react-router-dom'

import React from 'react'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
