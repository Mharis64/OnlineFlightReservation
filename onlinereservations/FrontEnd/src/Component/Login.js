import { useRef } from "react";
import { Link } from "react-router-dom";
import '../CSS/Login.css';
const Login=()=> {

   const handleSubmit=( sub)=>{
      sub.preventDefault();
  
   }
   
   const username =useRef(null);
   const password =useRef(null);
   
   
   
   
   const onClick = ()=>{
    console.log(username.current.value);
    console.log(password.current.value); 
   }




  return (
   <div id="loginBody"  >
    <div style={{width:"60vw",marginLeft:"15rem",marginTop:"8rem", justifySelf:"center",backgroundColor:"antiquewhite",position:"absolute"}} 
    id="container1">
    <div class="row"  >
       <form onSubmit={handleSubmit} class="col s12">
     {/* <div class="row" > */}
             <div class="input-field col s7 ">
                <i class="material-icons prefix">account_circle</i>
                <input ref={username}  id="name" type="text"  style={{color:"solid black"}}  placeholder="Username" class="  validate" required/>
                {/* <label for="name">Username</label> */}

             {/* </div> */}

             </div>
             
             <div class="input-field col s7 ">
             <i class="material-icons prefix">lock</i>
                <input ref={password} id="name" type="password" placeholder="Password" class="validate" required/>
            
          </div>
               
                </form>


                <div class="row">
             <div class="input-field col s12">
                
                   
                <Link to="/Seats">
<button onClick={onClick}  id=" menu1" class="Login Button" type="submit" style={{width:"10rem", height:"3rem",border:"none",alignSelf:"left", backgroundColor:"blue",color:"white"}}>Log In</button>
</Link> 

<Link to="/Login">
<button id=" menu1" class="Login Button" type="submit" style={{fontFamily:"serif", width:"10rem", height:"3rem",marginTop:"10px",border:"none",marginLeft:"1rem" , backgroundColor:"blue" ,color:"white"}}>Forgot Password</button>
</Link> 
<Link to="/Login">
<button id=" menu1" class="Login Button" type="submit" style={{fontFamily:"serif", width:"10rem", height:"3rem",  marginTop:"10px",border:"none",marginLeft:"1rem" , backgroundColor:"blue",color:"white"}}>Change Password</button>
</Link> 
<br/>


<p style={{marginTop:"3vh"}}>not registered?</p>

<Link to="/SignUp">
<button onClick={onClick}  id=" menu1" class="Login Button" type="submit" style={{width:"10rem", height:"3rem",border:"none",alignSelf:"left", backgroundColor:"blue",color:"white"}}>Sign Up</button>
</Link>
               
              </div>
          </div>





    </div>
</div>

</div>
    );
}

export default Login;