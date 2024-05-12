import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserFailure, updateUserStart, updateUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess,signOut } from '../redux/user/userSlice'

export default function Student()  {

  const { currentUser, loading,error } = useSelector((state)=>state.user);
 
  const [formData, setFormData ] = useState({})
  const dispatch = useDispatch();
  const [ updateSuccess, setUpdateSuccess ] = useState(false);

  const handleChange = (e) => 
    (setFormData({...formData, [e.target.id]:e.target.value}))
  
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(updateUserStart())
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data))
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true)
    } catch(error){
      dispatch(updateUserFailure(error))
    }
  }

  const handleDeleteAccount = async () => {
    try{
      dispatch(deleteUserStart())
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE'
      })
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data))
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch(error){
      dispatch(deleteUserFailure(error))
    }
  } 
  
  const handleSignOut = async (e) => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch(error){
      console.log(error)
    }
  } 

   return (
    
    <div class="relative isolate px-6 pt-14 lg:px-8">
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4 " onSubmit={hanldeSubmit}>
        <input defaultValue={currentUser.firstname} type='text' placeholder='First name' id='firstname' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <input defaultValue={currentUser.lastname} type='text' placeholder='Last name' id='lastname' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <input defaultValue={currentUser.username} type='text' placeholder='Username' id='username' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <input defaultValue={currentUser.email} type='email' placeholder='Email' id='email' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <input type='password' placeholder='Password' id='password' className="bg-slate-100 p-3 rounded-lg"onChange={handleChange}></input>
        <button  disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
        {loading ? 'Loading..':'Update'}
        </button> 
      </form>
      <div className='flex justify-between mt-5'>
        <span onClick={handleDeleteAccount} className='text-red-700 cursor-pointer'>Delete Account</span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
      <p className="text-red-600 mt-5"> {error && "Something went wrong!"}</p>
      <p className="text-green-600 mt-5"> {updateSuccess && "User is updated successfully!"}</p>

    </div></div>
  )
}

