import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
// import { useNavigate } from "react-router-dom";
// import  {useEffect} from "react";
// import { FiAlignJustify } from "react-icons/fi";



function Footer() {
  // function ReDirect() {
  //   const navigate = useNavigate()
  //   useEffect(() => {

  //       navigate("/contactForm");
  //   }, [navigate]);
  // }






  return (
    <div className='footer'>
    <p className='footertrade'> &copy; 2023 AJM.</p>


    <a className='footer' href="https://github.com/austinmcclarren" target="_blank" rel="noreferrer">
    <FaGithub size={35} />
    </a>


      <a className='footer' href="https://www.linkedin.com/in/austin-mcclarren-45875a261/" target="_blank" rel="noreferrer">
      <FaLinkedin size={35} />
      </a>

      {/* <a className='footer' href='/contactForm'  target="_blank" rel="noreferrer">
      <FiAlignJustify size={35} />
    </a> */}
    </div>

      
    
  )
}

export default Footer