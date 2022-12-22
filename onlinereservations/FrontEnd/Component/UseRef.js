import { type } from "@testing-library/user-event/dist/type";
import { useRef, useState } from "react";

const UseRef = () => {
    const [myData, setMyData]= useState("");
    const inputElement= useRef("");
const changeStyle=()=>{
    inputElement.current.style.backgroundColor="red";

}

    return ( 
<>ref={inputElement}
type ="text"
value ={myData}
onchange={(e) => setMyData(e.target.value)}
<br/>
<button onClick={changeStyle}> submit </button>
</>

     );
}
 
export default UseRef;