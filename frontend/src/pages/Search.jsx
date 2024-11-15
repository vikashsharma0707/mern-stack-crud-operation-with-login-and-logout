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
          <h4 style={{marginLeft:"100px"}}>This search page</h4>
           Employee Number : <input type="text" placeholder="enter empno"   value={empno} onChange={(e)=>{setempno(e.target.value)}}
           style={{width:"250px",height:"30px",borderRadius:"60px",marginTop:"30px"}}/>
          <button onClick={handlesearch}>Search</button>

          <Table striped bordered hover style={{width:"40%",marginTop:"30px"}}>
      <thead>
        <tr>
          <th>Empno</th>
          <th>Empname</th>
          <th>Designation</th>
          <th>Salary</th>
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