import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [values, setValues] =  useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    //const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prenv => [{...prenv, [event.target.name] : [event.target.value] }])

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8081/login", values)
        .then(res =>{
                if(res.data === "Success")
                {
                    navigate("/home");
                }else{
                    alert("No record");
                }

        })
        .catch(err => console.log(err));

    }


    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className=' bg-white p-3 rounded w-60'>
                <h2>Login</h2>
            
                    <form action="" onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='email'><strong>Email :</strong></label>
                            <input type='email' placeholder='Enter email' className='form-control rounded-0'
                            onChange={handleInput} name='email' />
                            
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'>< strong>Password :</strong></label>
                            <input type='password' placeholder='Enter password' className='form-control rounded-0' 
                            onChange={handleInput} name='password' />
                           
                           
                        </div>
                        <button type='submit' className='btn btn-success w-100'>Login</button>
                        <p>Vous acceptez nos termes et conditions</p>
                       
                    </form>
               
            </div>

        </div>
    )
}

export default Login