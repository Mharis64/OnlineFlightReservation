
import { Link } from "react-router-dom";
const Nav = () => {
    return ( 

<div id="nav"  style={{width : "115vw",marginLeft:"1%"}}> 

<nav>
  <ul>
<li id="sty">



<Link  class="nav" to="/FlightDeals">Flight Deals

</Link>

</li>

<li  id="sty">
<Link class="nav" to="/Book">Book</Link>
</li>
<li id="sty">
<Link class="nav" to="/Destinations">Destinations</Link>
</li>
<li id="sty">
<Link class="nav" to="/Home">Home</Link>
</li>

<li id="sty">
<Link class="nav" to="/Login" >Log In</Link>
</li>

<li id="sty">
<Link class="nav" to="/SignUp">Sign Up</Link>
</li>



</ul>






</nav>







<nav>

<div class="wrapper">


<ul class="nav-links">
<label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>



<li>
<a href="#" class="desktop-item">ABOUT FIFA</a>


<div class="mega-box">
  <div class="content">
    <div class="row">
      
    </div>
    <div class="row"></div>
    </div>
    </div>
    
    </li>
    </ul>
    </div>
    </nav>
    </div>
     );
}
 
export default Nav;