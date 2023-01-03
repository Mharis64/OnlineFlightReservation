import'../CSS/FlightDeals.css';

function FlightDeals() {
     return (
        <div > 
               <div id='flightdeals' class="card"  style={{marginTop:"11.5vh",height:"99vh",width:"50vw"}}>
                <div id='header'>  
                       <div class="card-header" >
     Flight Deals
     </div>
 
 <h3 class="card-title" style={{fontWeight:"bold"}}>Freedom to Choose</h3>
     <h5 class="card-title" > 
    AirPak is pleased to introduce new options for fares and pricing</h5>
    
 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
     <div id='aa'>
     <table className="table table-bordered" style={{height:"30vh",width:"40vw"}}>
   <tr>
    <th>Fare faimly</th>
     <th>Value</th>
 <th>flexibility</th>
     <th>Extra</th>
    </tr>

    <tr>
<td> <p>Ticket Changes </p></td>
<td> Allowed with Higher Fee*</td>
<td> Allowed with Standard Fee*</td>
<td> Allowed with Reduced Fee*</td>
 </tr>
 <tr>
<td> Ticket Refunds</td>
<td> Allowed with Higher Fee*</td>
<td> Allowed with Standard Fee*</td>
<td> Allowed with Reduced Fee*</td>
 </tr>

 <tr>
<td> Checked Bag Allowance</td>
<td> No Bags* </td>
<td> 1 Bag 20kg*</td>
<td>2 Bags 20kg each*</td>
 </tr>


 <tr>
<td> Carry On Bags:</td>
<td> 1 Bag 7kg*</td>
<td> 1 Bag 7kg* </td>
<td>1 Bag 7kg*</td>
 </tr>


 <tr>
<td>BlueMiles Bonus:</td>
<td> 50% Miles Rewards</td>
<td>100% Miles Rewards </td>
<td>200% Miles Rewards</td>
 </tr>


 <tr>
<td>Priority Boarding:</td>
<td> </td>
<td> </td>
<td>Yes</td>
 </tr>

 
 
 <tr>
<td>Preferred Seating</td>
<td> </td>
<td> </td>
<td>Upon Availability</td>
 </tr>


 
 
 

    </table>
    


    </div>



    </div>
     </div>
           
        <img id='waitingArea'   src={require("../images/waitingArea.jpg")}/> 
    

</div>);
    }
    
    export default FlightDeals;
    