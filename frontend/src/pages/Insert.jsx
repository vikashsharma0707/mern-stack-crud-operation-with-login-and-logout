import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import axios from "axios"


const Insert=()=>{

  const [input,setinput] =useState({});

  const handledata=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setinput(values=>({...values,[name]:value}))
  }

  const handlesubmit=()=>{
    let api="http://localhost:8000/employee/employeeSave";
    axios.post(api,input).then((res)=>{
        alert("data send sucessfully")
    })

    setinput(" ")
    
  }


    return(
        <>
          <h1>This insert page</h1>
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter employee number</Form.Label>
        <Form.Control type="text" placeholder="Enter empno"  name="eno" value={input.eno}  onChange={handledata}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter employee name</Form.Label>
        <Form.Control type="text" placeholder="Enter employee name"  name="name" value={input.name}  onChange={handledata}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter designation</Form.Label>
        <Form.Control type="text" placeholder="Enter designation" name="designation" value={input.designation}  onChange={handledata}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" name="salary" value={input.salary}  onChange={handledata}/>
      </Form.Group>
      
    </Form>

    <button onClick={handlesubmit}>Submit</button>

          
        </>
    )
}

export default Insert;

