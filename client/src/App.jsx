import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AdminRoutes from './routes/admin/AdminRoutes'
import PublicRoute from './routes/public/PublicRoute'
import UserRoute from './routes/user/UserRoute'

const App = () => {
  return <>
    <BrowserRouter>
      <PublicRoute />
      <UserRoute />
      <AdminRoutes />
    </BrowserRouter>
  </>
}

export default App