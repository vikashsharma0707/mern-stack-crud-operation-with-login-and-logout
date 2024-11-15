import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import "../css/hello.css"



const Display=()=>{

  const tab ={
    color:"blue"
  }

  const [val,setval] = useState([]);

  const loaddata=()=>{
    let api="http://localhost:8000/employee/employeeDisplay";
    axios.get(api).then((res)=>{
      setval(res.data)
    })
  }

  useEffect(()=>{
    loaddata();
  },[])

let count=0;
  let ans = val.map((key)=>{
    count++
  return(
    <>
      <tr>
        <td>{count}</td>
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
          <h4 style={{marginLeft:"200px",}}>This display page</h4>
          <Table striped bordered hover style={{width:"40%",marginTop:"50px"}}>
      <thead>
        <tr>
          <th></th>
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

export default Display;