import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import {useNavigate} from "react-router-dom"



const Update=()=>{

  const [val,setval] =useState([]);
  const navigate = useNavigate()

  const loaddata=()=>{
    let api="http://localhost:8000/employee/employeeUpdate";
    axios.get(api).then((res)=>{
      setval(res.data)
    })
  }



  useEffect(()=>{
    loaddata();
  },[])

  const recdel=(id)=>{
    let api="http://localhost:8000/employee/employeeDelete";
    axios.post(api,{id:id}).then((res)=>{
      alert("record delete sucessfully")
    })
  }


  const myedt=(id)=>{
    navigate(`/edit/${id}`)
  }

  let count=0;
  let ans = val.map((key)=>{
    count++;
    return(
      <>
        <tr>
          <td>{count}</td>
          <td>{key.empno}</td>
          <td>{key.empname}</td>
          <td>{key.designation}</td>
          <td>{key.salary}</td>
          <td style={{display:"flex",justifyContent:"space-evenly"}}>
            <a href="">
              <button  onClick={()=>{recdel(key._id)}} style={{backgroundColor:"red",width:"60px"}}>Delete</button>
            </a>

            <a href="">
              <button  onClick={()=>{myedt(key._id)}} style={{backgroundColor:"blue",width:"60px"}}>Edit</button>           
            </a>
          </td>

         
        </tr>
      </>
    )
    })

    return(
        <>
          <h1>This update page</h1>
          <Table striped bordered hover style={{width:"40%",marginTop:"30px"}}>
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

export default Update;