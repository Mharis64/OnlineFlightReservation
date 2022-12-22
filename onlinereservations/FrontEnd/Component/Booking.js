import '../CSS/Booking.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seats from './Seats';
const Booking = () => {

  const [date,setDate]= useState();
  console.log("date", date);


  return (

<div>

<div id='departure' >

<label for="exampleDataList" class="form-label">Depatrting From</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
<datalist id="datalistOptions">
  <option value="Karachi"/>
  <option value="Lahour"/>
  <option value="Islamabad"/>
  <option value="Islamabad"/>

</datalist>


</div>


<div id='arrival'>

<label  for="exampleDataList" class="form-label"  >Arriving To</label>
<input class="form-control" list="datalistOptions" id="exampleDataList"  placeholder="Type to search..."/>
<datalist id="datalistOptions">
  <option value="karachi"/>
  <option value="Lahour"/>
  <option value="Peshawar"/>
  <option value="Islamabad"/>
</datalist>





<input type="date" ></input>
<Link to="/SignUp">
<button id=" menu1" class="Login Button" type="submit" style={{width:"10rem", height:"3rem",textDecoration:"none",border:"none",backgroundColor:"blue",color:"white",marginLeft:"7vw",marginTop:"2vh"}}>Search</button>
</Link> 


</div>




</div>

    );
}
 
export default Booking;