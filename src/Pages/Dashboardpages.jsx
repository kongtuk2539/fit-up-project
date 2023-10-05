import React from 'react'
import Layout from '../components/sidebar-ham/Layout'
import Dashboard from '../viewpage/Dashboard'
const Dashboardpages = () => {
  return (
    <div className='bg-black-dark min-h-screen h-full w-full'>
        <Layout>
            <Dashboard/>
        </Layout>
       
    </div>
  )
}

export default Dashboardpages