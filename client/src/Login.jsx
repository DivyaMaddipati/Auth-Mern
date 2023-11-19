import { useState } from 'react';
import axios from 'axios' 
import {useNavigate} from 'react-router-dom'
import './login.css'


function Login(){

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/login',{email, password})
        .then((result) => {
            console.log(result)
            if(result.data === "Success"){
                localStorage.setItem('userEmail', email);
                navigate('/home')
            }
        })
        .catch((err) => console.log(err))
    }


    return(
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
        <div className='bg-white p-5 rounded w-50 m-5'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='md-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input 
                    type="email"
                    placeholder='Enter email'
                    autoComplete = "off"
                    name="email"
                    id = "email"
                    className='form-control rounded-0'
                    onChange={(e) => setemail(e.target.value)}
                    />
                </div>
                <div className='md-3'>
                    <label htmlFor='password'>
                        <strong>Password</strong>
                    </label>
                    <br></br>
                    <input 
                    type="password"
                    placeholder='Enter Password'
                    autoComplete = "off"
                    name="password"
                    className='form-control rounded-0'
                    id = "password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br></br>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Login</button>
                </form>

               
        </div>
    </div>
    )
}
export default Login;