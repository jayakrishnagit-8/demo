import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function navbar() {
  return (
    <div class="mainnav">
      <nav>
        <Link to="./home" class="nav-item">Home</Link>
        <Link to="./users" class="nav-item">Users</Link>
        <Link to="./apply" class="nav-item">Apply Now</Link>
        <Link to="./contact" class="nav-item">Contact Us</Link>
      </nav>
    </div>
  )
}
