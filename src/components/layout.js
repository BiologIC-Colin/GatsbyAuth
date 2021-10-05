import React from "react";
import { Link } from 'gatsby';
import "./main.css"

const Layout = ({ children }) => (
  <React.Fragment>
     <header style={{
       background: '#339',
       color: 'white'
     }}>
       <Link className="nav-item" to="/" >My Sweet App</Link>
       <Link className="nav-item" to="/dashboard">Dashboard</Link>

     </header>
    <main style={{
      margin: '5rem auto',
      width: '90%',
      maxWidth: 600
    }}>

      { children }
    </main>


  </React.Fragment>
)

export default Layout