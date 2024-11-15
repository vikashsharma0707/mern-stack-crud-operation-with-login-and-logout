import { Outlet, useNavigate } from "react-router-dom"
import Header from "./Componet/Header"



const Layout=()=>{

  

return(
  <>

  
    <div>
    <Header/>
    </div>

    <div style={{marginTop:"100px",marginLeft:"300px"}}>
    <Outlet/>
    </div>

  

  
  </>
)
}


export default Layout