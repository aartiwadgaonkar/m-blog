import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
    const {info} = useSelector(state=> state.user)
  return <>
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" href="#">Account</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to='/user/add-blog' className='nav-link'>Add Blog <i className='bi bi-plus'></i></Link>
        </div>
        <div className="ms-auto">
         <div class="dropdown">
           <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
            {info.name}
           </button>
           <ul class="dropdown-menu">r
             <li><a class="dropdown-item" href="#">Log out</a></li>
           </ul>
         </div>
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default UserNavbar