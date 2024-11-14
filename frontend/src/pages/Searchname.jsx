import axios from "axios";
import { useState } from "react"
import Table from 'react-bootstrap/Table';



const Searchname=()=>{
    const [empname,setempname] =useState("");
    const [val,setval] =useState([]);

    const handleinput=(e)=>{
         setempname(e.target.value);
         let api=`http://localhost:8000/employee/employeeSearchName/?empname=${empname}`;
         axios.get(api).then((res)=>{
             setval(res.data)
             console.log(res.data)
         })
    }

    let ans = val.map((key)=>{
        return(
          <>
            <tr>
              <td>{key.empno}</td>
              <td>{key.empname}</td>
              <td>{key.designation}</td>
              <td>{key.salary}</td>
            </tr>
          </>
        )
        })
      


    return(
        <>
        
        <h1>This is serach page</h1>
        Enter name :<input type="text"  value={empname} onChange={handleinput}/>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>

        </>
    )
}

export default Searchname