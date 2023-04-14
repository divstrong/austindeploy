import React, {useEffect, useState} from "react";
import {Link,useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import DataObjectIcon from '@mui/icons-material/DataObject';





function Navbar(){
   
    
    const [expandNav, setExpandNav] = useState(false);
    //the use state hook is telling whether its closed or open

    const location = useLocation();
    //get information to where you are in your website

    useEffect(() => {
        setExpandNav(false)
    }, [location])
    //run this use effect whenever the location changes, set it to false, which will close it



return(
      
  <div className="navbar" id={expandNav ? "open" : "close"}>
    <div className="toggleButton">
{/* making a button to a nav when page is to small */}
        <button onClick={()=> {
            setExpandNav((prev) => !prev);
            }}
            >
            {" "}<DataObjectIcon/>{" "}
            </button>
    </div>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/Resume">Resume</Link>
        {/* <Link to="/SocialLink">Socials</Link> */}


    </div>
    </div>
);    
}

export default Navbar;