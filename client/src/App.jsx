import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header';
import Profile from './pages/Profile';
import Class from './pages/Class';
import SubjectSchedule from './pages/SubjectSchedule';
import Schedules from './pages/Schedules';
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sign-in' element={<SignIn/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/class' element={<Class/>}></Route>
      <Route path='/schedules' element={<Schedules/>}></Route>
      <Route path='/subject-schedule' element={<SubjectSchedule/>}></Route>
      <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App