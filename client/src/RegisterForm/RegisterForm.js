import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const RegisterForm = () =>{
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = () => {
        axios.post('http://localhost:8000/register', {
            username: usernameReg,
            password: passwordReg
        }).then((response) => {
            console.log('response->', response)
        })
    }
    return(
        <div className="create">
            <h1>Register Form</h1>
            <label>Username</label>
            <input type='text' onChange={(e) => {setUsernameReg(e.target.value)}}></input>
            <label>Password</label>
            <input type='password' onChange={(e) => {setPasswordReg(e.target.value)}}></input>
            <button onClick={register}>Sign up</button>
            <p>Already have account?</p>
            <Link to='sign-in'>Login</Link>
        </div>
    )
}
export default RegisterForm