import React from 'react'
import Layout from '../components/sidebar-ham/Layout'
import Dashboard from '../viewpage/Dashboard'
const Dashboardpages = () => {
  return (
    <div className='bg-bgdesktop bg-cover bg-center w-full object-fill'>
        <Layout>
            <Dashboard/>
        </Layout>
       
    </div>
  )
}

export default Dashboardpages