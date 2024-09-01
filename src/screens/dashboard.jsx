import React from 'react'
import Navbar from '../dashboard/navbar'
import Hero from '../dashboard/hero'
import AdminPanel from '../dashboard/adminpanel'

function Dashboard() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <AdminPanel />
  </div>
  )
}

export default Dashboard