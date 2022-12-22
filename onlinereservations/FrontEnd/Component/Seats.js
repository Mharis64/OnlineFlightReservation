import'../CSS/Seats.css';
import FlightName from './FlightName';
import { createContext,useState,useEffect } from 'react';
const name = createContext();


const Seats = () => {
  const [namee , setName] = useState("PK123");
  const [namee1 , setName1] = useState("PK165");

  const [seat1,setSeat1]= useState(500);
  const [seat2,setSeat2]= useState(500);
 
 useEffect (()=>{
alert("Confirm Booking");
 },[seat1]);


 

    return ( 
    <div id="seats">
      
      
      <div id="flight" class="card">
    <h5 class="card-header">


    < name.Provider value = {namee}>
       
       <FlightName />
   
       </name.Provider>
   

    </h5>
    <div class="card-body">
      <h5 class="card-title">AirBlue</h5>
      <p class="card-text">
        
<table class="table">
<thead>
  <tr>
    <th scope="col">LA</th>
             <i class="material-icons prefix">flight_takeoff</i>
    <th scope="col"></th>
    <th scope="col">ISB</th>
    <th scope="col">100$</th>
    <a  id='bttn' onClick={()=>{

setSeat1(seat1-1);

    }} href="#" class="btn btn-primary">Book</a>
   
  </tr>
</thead>
</table>


      </p>
      <p> Available Seats:  {seat1}</p>
       </div>
  </div>

  
  <div id="flight" class="card">
    <h5 class="card-header"> < 
      name.Provider value = {namee1}>
       
       <FlightName />
   
       </name.Provider>
   </h5>
    <div class="card-body">
      <h5 class="card-title">PIA</h5>
      <p class="card-text">
        
<table class="table">
<thead>
  <tr>
    <th scope="col">kHI</th>
             <i class="material-icons prefix">flight_takeoff</i>
    <th scope="col"></th>
    <th scope="col">PESH</th>
    <th scope="col">100$</th>
    <a  id='bttn' 
     onClick={()=>{

      setSeat2(seat2-1);
      
          }}
    href="#" class="btn btn-primary">Book</a>
   
  </tr>
</thead>
</table>
</p>
<p> Available Seats:  {seat2}</p>


       </div>
  </div>
 
    </div>
     );
}
 
export default Seats;
export {name};