import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const KarsScreen = () => {
  return (

    <div>
      <Header />
      <Outlet />

    </div>
  )
}

export default KarsScreen