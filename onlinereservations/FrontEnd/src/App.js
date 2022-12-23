
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 import { Route, Routes } from 'react-router-dom';
 import Navbar from './Component/Navbar';
//  import Booking from './Component/Booking';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import FlightDeals from './Component/FlightDeals';
import Distinations from './Distinataions';
import Dashboard from './Component/Dashboard';
import Home from './Component/Home';
// import UseRef from './Component/UseRef';
import Seats from './Component/Seats';
import Footer from './Component/Footer';
// import UseCaseInputValidation from './Component/UseCaseInputValidation';

 function App() {
   return (
     <div>
       <Navbar/>

<Footer/>

 <Routes>

 <Route path="/" element={<Home/>}/>

 <Route path="Home" element={<Home/>}/>
  
  <Route path="Seats" element={<Seats/>}/>
  <Route path="Login" element={<Login/>}/>
  <Route path="SignUp" element={<SignUp/>}/> 
  
  <Route path="FlightDeals" element={<FlightDeals/>}/>
  <Route path="Distinations" element={<Distinations/>}/>
  <Route path="Dashboard" element={<Dashboard/>}/>


 </Routes>
 {/* <UseCaseInputValidation/> */}

 {/* <Seats/> */}


   </div>
     
   );
 }
 
 export default App;
 