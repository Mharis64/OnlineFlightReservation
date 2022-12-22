import { useContext } from "react";
import {name} from './Seats'
const FlightName = () => {

     const namee= useContext(name);
    return ( 

<h1 > {namee}</h1>

     );
}
 
export default FlightName;