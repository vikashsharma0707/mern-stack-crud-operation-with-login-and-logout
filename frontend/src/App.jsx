import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Display from "./pages/Display";
import Insert from "./pages/Insert";
import Search from "./pages/Search";
import Update from "./pages/Update";
import Edit from "./pages/Edit";
import Searchname from "./pages/Searchname";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Logout from "./pages/Logout";



const App=()=>{
  return(
    <>
    

    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="edit/:empid" element={<Edit/>}/>
      <Route path="searchname" element={<Searchname/>}/>
      <Route path="registration" element={<Registration/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="logout" element={<Logout/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;