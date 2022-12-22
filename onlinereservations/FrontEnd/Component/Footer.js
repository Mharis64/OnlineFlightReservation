import "../CSS/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (  

        <div id="Footer">
             

<div  style={{marginLeft:"200px"}}>
<h3>AirPak</h3>

            <Link to = "/Explore">
                <ul>
            
            <li> <Link to="AboutUs"id='bar'  style={{display:"inline " ,fontSize:"15px"}}>About Us </Link> </li>
      <li> <Link to="AboutUs"id='bar'  style={{display:"inline",fontSize:"15px"}}>Corporate Information </Link> </li>
      <li> <Link to="Newsroom"id='bar'  style={{display:"inline",fontSize:"15px"}}>Newsroom </Link> </li>
      <li> <Link to="Csreers"id='bar'  style={{display:"inline",fontSize:"15px"}}>Careers </Link> </li>
      <li> <Link to="SignUp"id='bar'  style={{display:"inline",fontSize:"15px"}}>Subscribe/Unsubscribe to Email2 </Link> </li>
      </ul>
     </Link>
     </div>

<div style={{marginLeft:"500px",marginTop:"-175px"}}>
    <h3>Services</h3>

    <ul>
            
            <li> <Link to="FlightDeals"id='bar'  style={{display:"inline " ,fontSize:"15px"}}>Travel Info </Link> </li>
      <li> <Link to="FlightStatus"id='bar'  style={{display:"inline",fontSize:"15px"}}>Flight Status </Link> </li>
      <li> <Link to="Cargo"id='bar'  style={{display:"inline",fontSize:"15px"}}>Cargo </Link> </li>
      <li> <Link to="TravelAgents"id='bar'  style={{display:"inline",fontSize:"15px"}}>Travel Agents </Link> </li>
      <li> <Link to="ContactUs"id='bar'  style={{display:"inline",fontSize:"15px"}}>Contact Us </Link> </li>
      <li> <Link to="Privacy"id='bar'  style={{display:"inline",fontSize:"15px"}}>Privacy Policy </Link> </li>
      </ul>

</div>


                         </div>
        
    );
}
 
export default Footer;
