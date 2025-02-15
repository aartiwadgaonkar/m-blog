import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import UserNavbar from '../../components/user/userNavbar'
import LoginOnly from '../../LoginOnly'
import Account from '../../pages/user/Account'
import AddBlog from '../../pages/user/AddBlog'


const UserLayout = () => <>
<UserNavbar/>
<Outlet/>
</>
const UserRoute = () => {
 
  return <>
  <Routes>
        <Route path='/user'element={<LoginOnly component={<UserLayout/>}/>}  >
          {/* <Route index element={<User/>} /> */}
          <Route index element={<Account/>} />
          <Route path='add-blog' element={<AddBlog/>} />
        </Route>
      </Routes>
  </>
}





export default UserRoute