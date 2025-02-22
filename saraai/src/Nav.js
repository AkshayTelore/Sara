import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import speakimg from "./assets/speak.gif";
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Sara 2.0</a>
      <img src={speakimg} id='brand' alt='not found' />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='#'>Contact Us</a>
          </li>
        </ul>
        
        {/* <form class="d-flex" role="search">
        <input class="form-control me-4 my-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-0.3" type="submit">Search</button>
      </form> */}
      </div>
      <div className='last'><FiAlignJustify /></div>
    </div>
  </nav>
  )
}

export default Nav