import { Link } from "react-router-dom";
import '../CSS/Navbar.css'


const Navbar = () => {
  
  return ( 
    <div id="navbar" style={{position:"fixed"}}>

<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">AirPak</a>


<div>

</div>

    <ul class="nav-links" style={{textDecoration:"none"}}>

<li id="sty"style={{marginLeft:"10px" }} >



<Link class="nav" style={{color:"black"}} to="/FlightDeals">Flight Deals

</Link>

</li>

<li id="sty">
<Link class="nav" to="/Home">Home</Link>
</li>

<li id="sty">
<Link class="nav" to="/Dashboard">Dashboard</Link>
</li>

<li id="sty">
<Link class="nav" to="/SignUp">
  sign Up
</Link>
</li>


<li id="sty">
<Link class="nav" to="/Login">Log in</Link>
</li>




</ul>



  </div>
</nav>

    </div>
   );
}
 
export default Navbar;