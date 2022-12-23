import '../CSS/Home.css'
import { Link } from 'react-router-dom';
import Booking from '../Component/Booking';
import Footer from './Footer';
const Home = () => {
    return (
         <div>


            
  <div class="row" id ="upperBody"  >
      <div class="col1 s12 "  >
  <Booking/>

       </div>

    </div>
{/*               
  <div class="row" id ="upperBody"  >
      <div class="col1 s12 "  >
  <Footer/>

       </div>

    </div> */}



 </div> );
}
 
export default Home;