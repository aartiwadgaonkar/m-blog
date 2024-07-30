import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const LoginOnly = ({component}) => {
    const {info} =useSelector(state => state.user)
//   !info && <Navigate to="/login"/>
  return info ?  component : <Navigate to="/login"/>
}

export default LoginOnly