import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{height:'300px',background:'orange', width:'100%', }} className='mt-5  '>
      <div style={{paddingTop:'30px'}} className="d-flex justify-content-between">
        {/*introduction*/}
        <div style={{width:'400px'}}>
          <h5><i class="fa-solid fa-bowl-food"></i>FOOD GALLERY</h5>
          <p>Designed and built with all the love in the world by the Music Player team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/*links*/}
        <div className='d-flex flex-column'>
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'black'}}>Home Page</Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'black'}}>View Page</Link>
        </div>
        {/*guides*/}
        <div className='d-flex flex-column'>
          <h5>Guides</h5>
          <a style={{textDecoration:'none',color:'black'}} href='https://react.dev/' target='_blank'>React</a>
          <a style={{textDecoration:'none',color:'black'}} href='https://reactrouter.com/en/main' target='_blank'>React Router</a>
          <a style={{textDecoration:'none',color:'black'}} href='https://react-bootstrap.github.io/' target='_blank'>React Bootstrap</a>
        </div>      
        {/*contact*/}
        <div className=' d-flex flex-column'>
            <h5>Contact</h5>
            <div className='d-flex'>
              <input placeholder='Enter your Email Here!!!' type="text" className='form-control me-2'/>
              <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
            </div>
            <div className='d-flex justify-content-between mt-3'>
              <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white'}} target='_blank'><i><i class="fa-brands fa-twitter" ></i></i></a>
              <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i><i class="fa-brands fa-instagram" ></i></i></a>
              <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i><i class="fa-brands fa-facebook" ></i></i></a>
              <a href="https://www.linkedin.com/feed/" style={{textDecoration:'none',color:'white'}} target='_blank'><i><i class="fa-brands fa-linkedin" ></i></i></a>
              <a href="https://github.com/dashboard" style={{textDecoration:'none',color:'white'}} target='_blank'><i><i class="fa-brands fa-github" ></i></i></a>
              
            </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; July 2024 Batch, Media Player App. Built with React</p>
    </div>
  )
}

export default Footer