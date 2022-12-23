
import'../CSS/Book.css';

const Book=()=> {


    return (
        <div id='bookingOPtion' style={{padding :0 ,marginBottom:0}}>
        <div class="d-flex flex-row " style={{height :"8px" }}>
          <ul class="main-tabs" >
            <li class="selected"  style={{display:"inline"}}> <label>Flight Search</label>
              </li><li class="selected"  style={{display:"inline"}}><label>Manage Booking</label>
                </li><li class="selected"  style={{display:"inline"}}><label>Flight Status</label></li></ul>
        </div>
        
        

<div  id="flightTo" class="d-flex flex-row "  style={{padding:0}}>
        <div id='flightTo' class="d-flex flex-row " style={{padding:0}}>
   
        <div  style={{padding: "15px"}}>
        <label style={{display:"block"}} for="TT_OW"><span>One Way</span></label>
        <label style={{display:"block"}} for="TT_OW"><span>Round Trip</span></label>

        <label for="TT_OW"><span>Multi-City</span></label>

   </div>

<div class="dropdown">

<div id='flex' class="d-inline-flex p-2">
  
  Departure</div>

  <ul id='link'>

<li> Islamabad</li>
<li> Lahour</li>
<li> Karachi</li>

  </ul>
</div>






<div class="dropdown">
<div id='flex' class="d-inline-flex p-2"> 
  Arriving To </div>

  <ul id='link'>

  <li> Islamabad</li>
<li> Lahour</li>
<li> Karachi</li>

  </ul>
</div>


<div class="dropdown">
<div id='flex' class="d-inline-flex p-2">
  
  Departure Date </div>
<table class="table caption-top" id='link'>
  <caption>january</caption>
  <thead>
    <tr>
      <th scope="col">1</th>
      <th scope="col">2</th>
      <th scope="col">3</th>
      <th scope="col">4</th>
      <th scope="col">5</th>
      <th scope="col">6</th>
      <th scope="col">7</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">8</th>
      <td>9</td>
      <td>10</td>
      <td>11</td>
      <td>12</td>
      <td>3</td>
      <td>4</td>

    </tr>
    <tr>
      <th scope="row">5</th>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td>20</td>
      <td>1</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>

    </tr>
    <tr>
      <th scope="row">9</th>
      <td>30</td>
      <td>31</td>

    </tr>
  </tbody>
</table>
</div>



<div class="dropdown">
<div id='flex' class="d-inline-flex p-2">
  Arrival Date </div>

  <table class="table caption-top" id='link'>
  <caption>january</caption>
  <thead>
    <tr>
      <th scope="col">1</th>
      <th scope="col">2</th>
      <th scope="col">3</th>
      <th scope="col">4</th>
      <th scope="col">5</th>
      <th scope="col">6</th>
      <th scope="col">7</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">8</th>
      <td>9</td>
      <td>10</td>
      <td>11</td>
      <td>12</td>
      <td>3</td>
      <td>4</td>

    </tr>
    <tr>
      <th scope="row">5</th>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td>20</td>
      <td>1</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>

    </tr>
    <tr>
      <th scope="row">9</th>
      <td>30</td>
      <td>31</td>

    </tr>
  </tbody>
</table>
</div>


<div class="dropdown">
<div id='flex' class="d-inline-flex p-2">
  
  1 Guest</div>

  <ul id='link'>

<li> Islamabad</li>
<li> Lahour</li>
<li> Karachi</li>

  </ul>
</div>


<div class="dropdown">
<div id='flex' class="d-inline-flex p-2">
  
  Promo Code</div>

  <ul id='link'>

<li> Islamabad</li>
<li> Lahour</li>
<li> Karachi</li>

  </ul>
</div>


</div>
</div>


</div>






    );
}

export default Book;