import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

const SignIn = () => {
  const [formData, setFormData ] = useState({})
  const {loading, error } = useSelector((state)=>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
 
  const handleChange = (e) => 
    {setFormData({...formData, [e.target.id]:e.target.value})}
  
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      
      if (data.success === false) {
        dispatch(signInFailure(data))
        return;
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch(error){
      dispatch(signInFailure(error))
    }
  }
  return (
    <div className="content">
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4 " onSubmit={hanldeSubmit}>
        <input type='email' placeholder='Email' id='email' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <input type='password' placeholder='Password' id='password' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          {loading ? 'Loading..':'Sign in'}
        </button>
        <OAuth/>
      </form>
      <div className="flex mt-5">
        <p>Don't have an account?</p>
        <Link to='/sign-up'><span className="text-blue-500">Sign up</span></Link>
      </div>
      <p className="text-red-600 mt-5">{error ? error.message || "Something went wrong!" :''}</p>
    </div>
    </div>
  )
}


export default SignIn