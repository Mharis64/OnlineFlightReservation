import { useRef } from "react";
import { Link } from "react-router-dom";

const Login=()=> {

   const handleSubmit=( sub)=>{
      sub.preventDefault();
  
   }
   
   const username =useRef(null);
   const password =useRef(null);
   
   
   
   
   const onClick = ()=>{
    console.log(username.current.value);
    console.log(password.current.value); 
   }67




  return (
    <div style={{width:"60vw",marginLeft:"15rem",marginTop:"8rem", justifySelf:"center",position:"fixed"}} id="container">
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


               
              </div>
          </div>





    </div>
</div>


    );
}

export default Login;