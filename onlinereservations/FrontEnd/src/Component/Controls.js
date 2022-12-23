import { useState } from "react";
import Booking from "./Booking";
const Controls = () => {
    const [city,setCity]= useState([

{cityName:"islamabad", cityId:"isb"},
{cityName:"islamabad", cityId:"isb"},
{cityName:"islamabad", cityId:"isb"},
{cityName:"islamabad", cityId:"isb"}


    ]);
    return ( 
        <div>

<div>

{
city.map((c)=>(
<p>
    {
        <Booking city={c}/>
    }
</p>



))
}

</div>

        </div>
     );
}
 
export default Controls;