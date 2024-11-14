import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';



const Display=()=>{

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
          <h1>This display page</h1>
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

export default Display;