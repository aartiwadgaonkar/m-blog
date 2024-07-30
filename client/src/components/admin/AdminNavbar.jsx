import React from 'react'
import { Link } from "react-router-dom"
export default function AdminNavbar() {
    return <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to='/'>Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" to='/admin/users'>users</Link>
                        <Link class="nav-link active" to='/admin/blogs'>blogs</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}
