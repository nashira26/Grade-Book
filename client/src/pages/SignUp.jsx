import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import OAuth from '../components/OAuth';

const SignUp = () => {

  const [formData, setFormData ] = useState({})
  const [loading, setLoading ] = useState(false)
  const [error, setError ] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => 
    (setFormData({...formData, [e.target.id]:e.target.value}))
  
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(false);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      setLoading(false)
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/sign-in')
    } catch(error){
      setLoading(false);
      setError(true);
    }
  }
   return (
    <div className="content">
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4 " onSubmit={hanldeSubmit}>
         <input type='text' placeholder='First name' id='firstname' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <input type='text' placeholder='Last name' id='lastname' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <input type='text' placeholder='Username' id='username' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <input type='email' placeholder='Email' id='email' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <input type='password' placeholder='Password' id='password' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <button  disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
        {loading ? 'Loading..':'Sign up'}
        </button>
      <OAuth/>
      </form>
      <div className="flex mt-5">
        <p>Have an account?</p>
        <Link to='/sign-in'><span className="text-blue-500">Sign In</span></Link>
      </div>
      <p className="text-red-600 mt-5"> {error && "Something went wrong!"}</p>
    </div>
    </div>
  )
}

export default SignUp