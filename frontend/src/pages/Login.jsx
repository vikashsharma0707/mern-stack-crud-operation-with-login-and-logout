import axios from "axios";
import { useState } from "react"
import {useNavigate} from "react-router-dom"



const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")

    const navigate = useNavigate()

    const handlesubmit = async () => {

        try {
            let api = "http://localhost:8000/employee/userLogin";
            let res = axios.post(api, { email: email, password: password });
            console.log(res.data)
              navigate("/home")
            localStorage.setItem("username", res.data[0].username);
            localStorage.setItem("email", res.data[0].email)
        } catch (error) {
            alert(error.response.data)
        }

    }
    return (
        <>

            <h1>This is login page</h1>

            Enter Email : <input type="text" placeholder="Enter your email" value={email} onChange={(e) => { setemail(e.target.value) }} /><br /><br />
            Enter password : <input type="text" placeholder="Enter your password" value={password} onChange={(e) => { setpassword(e.target.value) }} /><br /><br />
            <button onClick={handlesubmit}>subbmit</button>
        </>
    )
}

export default Login