import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {signOut } from '../redux/user/userSlice'  

const Header = () => {
  const { currentUser } = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const handleSignOut = async (e) => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch(error){
      console.log(error)
    }
  } 


  return (
    <div class="bg-white">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span>Grade Book</span>
          {/* <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""> */}
        </a>
      </div>
      {currentUser ? 
      <div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="/class" class="text-sm font-semibold leading-6 text-gray-900">My Class</a>
          <a href="/schedules" class="text-sm font-semibold leading-6 text-gray-900">Schedules</a>
          <a href='/profile' class="text-sm font-semibold leading-6 text-gray-900">Profile</a>  
        <div class="hidden lg:flex lg:justify-end">
          <a  onClick={handleSignOut} class="text-sm font-semibold leading-6 text-gray-900">Sign Out  <span aria-hidden="true">&rarr;</span></a>
        </div> 
        </div>
      </div>  
      :
      <div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Home</a>
        <div class="hidden lg:flex">
          <a href="/sign-in" class="text-sm font-semibold leading-6 text-gray-900">Sign In <span aria-hidden="true">&rarr;</span></a>
        </div> 
        </div>
      </div>
      }
    </nav>
    {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
    <div class="lg:hidden" role="dialog" aria-modal="true">
      {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            {currentUser ? 
            <div>
              <div class="space-y-2 py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">My Class</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Schedules</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Profile</a>
              </div>
              <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Sign out</a>
            </div>
            </div>
            : 
            <div>
            <div class="space-y-2 py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
              </div>
              <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Sign in</a>
            </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  </header>

 
</div>

)
}

export default Header