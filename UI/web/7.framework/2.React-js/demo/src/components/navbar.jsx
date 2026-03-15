import { Link } from 'react-router-dom';
import './Navbar.css'

function NavBar(){
   return(
      <>
      <header>
         <h1><Link to={"/"}>HOME</Link></h1>
         <div className="navbar">
            <div><Link to={"/login"}>Login</Link></div>
            <div><Link to={"/contact-us"}>Contact Us</Link></div>
            <div><Link to={"/about-us"}>About Us</Link></div>
         </div>
      </header>
      </>
   )
}

export default NavBar;