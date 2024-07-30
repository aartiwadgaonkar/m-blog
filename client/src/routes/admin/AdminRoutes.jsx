import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import AdminOnly from '../../AdminOnly'
import AdminNavbar from '../../components/admin/AdminNavbar'
import Blogs from '../../pages/admin/Blogs'
import Dashboard from '../../pages/admin/Dashboard'
import Users from '../../pages/admin/Users'

const AdminLayout = () => {
    return <>
        <AdminNavbar></AdminNavbar>
        <Outlet />
    </>
}
export default function AdminRoutes() {
    return <Routes>
        <Route path='/admin' element={<AdminOnly component={<AdminLayout />} />}>
            <Route index element={<Dashboard />} />
            <Route path='users' element={<Users />} />
            <Route path='blogs' element={<Blogs />} />
        </Route>
    </Routes>
}
