import React from 'react'
import Sidebar from './Sidebar'
import Hamber from './Hamber'
const Layout = ({children}) => {
  return (
    <div className='flex '>
      <Sidebar />
      {children}
      {/* <Sidebar /> */}
      {/* <Hamber /> */}
    </div>
  )
}

export default Layout