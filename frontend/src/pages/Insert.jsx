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
          <div style={{width:"50%",height:"500px",border:"2px solid black"}}>
            <h4  style={{backgroundColor:"blue",height:"40px",textAlign:"center"}}>Registration Form</h4>
          <Form style={{marginTop:"30px",alignItems:"center",padding:"0px 60px 0px 60px"}} >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{border:"none"}}>
        <Form.Label> Employee number</Form.Label>
        <Form.Control type="text" placeholder="Enter empno"  name="eno" value={input.eno}  onChange={handledata}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Employee name</Form.Label>
        <Form.Control type="text" placeholder="Enter employee name"  name="name" value={input.name}  onChange={handledata}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter designation" name="designation" value={input.designation}  onChange={handledata}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" name="salary" value={input.salary}  onChange={handledata}/>
      </Form.Group>
      <button onClick={handlesubmit} style={{marginTop:"15px",alignItems:"center",textAlign:"center",marginLeft:"15%",width:"250px",backgroundColor:"brown"}}>Submit</button>
      
    </Form>

    </div>

    

          
        </>
    )
}

export default Insert;

