import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
<nav  style={{background:'orange',height:'80px',}} class="navbar bg-body-orange">
  <div class="container-fluid">
    <Link to='/' style={{color:'black', textDecoration:'none',fontSize:'30px'}}><i class="fa-solid fa-bowl-food"></i>FOOD GALLERY</Link>
  </div>
</nav>


    </div>
  )
}

export default Header