import { Link, useNavigate } from 'react-router-dom';
import '../CSS/SignUp.css';
import { useState } from 'react';



const SignUp=()=> {

   const [passengerData , setPassengerData] =useState({
      firstName:"",
      lastName:"",
      userName:"",
      password:"",
      email:"",
      address:""
   })

   const{firstName,lastName,userName,password,email,address} =passengerData;

const goto = useNavigate ();

const handleSubmit=(sub)=>{
sub.preventDefault();
goto ("/Seats");
}

    return ( 
      <div id='body'>
      <div style={{width:"60%",marginLeft:"15rem",marginTop:"10rem",position:"absolute"}} id="container">
      <div class="row"  >
         <form onSubmit={handleSubmit} class="col s12">


         <div class="row" >
               <div class="input-field col s6 ">
                
               <input onChange={(e)=> handleChange(e)} type="text" id="input" autoComplete="on" placeholder="First Name"  
               style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }} />   
                              {/* <label for="name">Username</label> */}
                

               </div>


               
               <div class="input-field col s6 ">
                  {/* <label for="password">Password</label> */}
                  <input  onChange={(e)=> handleChange(e)} id="name" type="text" placeholder="Last Name" class="validate"  required/>   
                              </div>
            </div>




            <div class="row" >
               <div class="input-field col s6 ">
                  <i class="material-icons prefix">account_circle</i>
                  <input  onChange={(e)=> handleChange(e)}
                  id="name" type="text"   placeholder="Username" class="  validate" required/>
                  {/* <label for="name">Username</label> */}

               </div>


               
               <div class="input-field col s6 ">
               <i class="material-icons prefix">lock</i>

                  <input  onChange={(e)=> handleChange(e)}
                   id="name" type="password" placeholder="Password" class="validate" required/>
               </div>
            </div>
            <div class="row">
               <div class="input-field col s10">
               <i class="material-icons prefix">email</i>
                  <input   onChange={(e)=> handleChange(e)}
                   placeholder="Email" id="name" type="email" class="validate"/>
                  {/* <label for="email">Email</label> */}
               </div>
            </div>
            <div class="row">
               <div class="input-field col s10">
                  <i class="material-icons prefix">mode_edit</i>
                  <textarea   onChange={(e)=> handleChange(e)}
                   id="address" class="materialize-textarea"></textarea>
                  <label for="address">Address</label>
               </div>
            </div>
           
            <div class="row">
               <div class="input-field col s12">
                  <p>
                     
                  <Link to="">
<button onClick={(e)=> addDetails(e)}

id=" menu1" class="Login Button" type="submit" style={{display:"inline",fontFamily:"serif", fontSize:"2rem", width:"30rem", height:"3rem",  marginLeft:"50vw", backgroundColor:"blue",color:"white"}}  >Sign Up</button>
</Link> 
          </p>
                </div>
            </div>
         </form>
      </div>
</div>

</div>


     );
}

export default SignUp;