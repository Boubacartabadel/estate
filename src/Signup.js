import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



 function Signup() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
     
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value]})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8081/signup", values)
        .then(res => {
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log(err));
    }

  return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className=' bg-white p-3 rounded w-60'>
                <h2>Sign up</h2>
            
                    <form action="" onSubmit={handleSubmit} >
                        <div className='mb-3'>
                            <label htmlFor='name'><strong>Name :</strong></label>
                            <input type='text' placeholder='Enter name' className='form-control rounded-0'
                            name="name" onChange={handleChange} />
                            
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email'><strong>Email :</strong></label>
                            <input type='email' placeholder='Enter email' className='form-control rounded-0' 
                            name="email" onChange={handleChange}/>
                            
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'>< strong>Password :</strong></label>
                            <input type='password' placeholder='Enter password' className='form-control rounded-0' 
                            name="password" onChange={handleChange} />
                            
                        </div>
                        <button type="submit" className='btn btn-success w-100'>Sign up</button>
                        <p>Vous acceptez nos termes et conditions</p>
                      
                    </form>
               
            </div>

        </div>
    )
}

export default Signup
