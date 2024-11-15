
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

const Logout=()=>{
    
    const navigate =useNavigate();

  

    const loout=()=>{
        localStorage.clear();
        navigate("/login")
    }
    return(
        <>
        
        <h1>This is logout page</h1>
       
        <button onClick={loout}>Logout</button>
        </>
    )
}

export default Logout



