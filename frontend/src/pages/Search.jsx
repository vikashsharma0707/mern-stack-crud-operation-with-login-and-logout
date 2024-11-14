import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';



const Search=()=>{

  const [empno,setempno] =useState("")
  const [val,setval] =useState([])

  const handlesearch=()=>{
    let api="http://localhost:8000/employee/employeeSearch";
    axios.post(api,{empno:empno}).then((res)=>{
       setval(res.data)
       console.log(res.data)
    })
  }


  useEffect(()=>{
    handlesearch()
  },[])


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
          <h1>This search page</h1>
          Enter Employee Number : <input type="text" placeholder="enter empno"   value={empno} onChange={(e)=>{setempno(e.target.value)}}/>
          <button onClick={handlesearch}>Search</button>

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

export default Search;