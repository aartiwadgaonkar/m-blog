import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function AdminOnly({ component }) {
    const { info } = useSelector(state => state.user)

    return (info && info.role === "admin") ? component : <Navigate to='/login' />
}
