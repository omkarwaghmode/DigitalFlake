import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Signup = () => {

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const handleSubmit =(e)=>{
      // console.log({name,email,password});
        e.preventDefault()
        axios.post('http://localhost:3001/Signup ', {name,email,password})
        .then(result => console.log.result(result))
        .catch(err=> console.log(err))
    }

  return (
    <div>
        <h1>Signup</h1>

        <form  onSubmit={handleSubmit}>
        <h5>Name</h5>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder="Enter Name"
          name="Name"
          id=""
          
        />
        <h5>Email</h5>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="Email"
          name=""
          id=""
        />

        <h5>Password</h5>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder="Password"
          name="id"
          id=""
          />
        <br>
        </br>
        <br>
        </br>
                  <button type="submit" className="btn btn-success btn-sm">
            Register
        </button>
        </form>

        <p>Already have an account</p>
        <br/>
        <br/>
        <br/>

        <Link to="/" type="submit" className="btn btn-secondary btn-sm">
            Login
        </Link>
      

    </div>
  )
}

export default Signup