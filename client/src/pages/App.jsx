import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import Profile from './Profile';
import Class from './Class';
import ClassSchedule from './ClassSchedule';
import ClassSchedules from './ClassSchedules';
import SubjectSchedule from './SubjectSchedule';
import Subjects from './Subjects';
import PrivateRoute from '../components/PrivateRoute'
import { Segment } from 'semantic-ui-react';

const App = () => {
  return (
    <BrowserRouter>
      <SideBar/>
      <Segment basic className='main-content'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sign-in' element={<SignIn/>}></Route>
          <Route path='/sign-up' element={<SignUp/>}></Route>
          <Route path='/class' element={<Class/>}></Route>
          <Route path='/class-schedules' element={<ClassSchedules/>}></Route>
          <Route path='/class-schedule' element={<ClassSchedule/>}></Route>
          <Route path='/subjects' element={<Subjects/>}></Route>
          <Route path='/subject-schedule' element={<SubjectSchedule/>}></Route>
          <Route element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profile/>}></Route>
          </Route>
        </Routes>
        </Segment>
  
    
    </BrowserRouter>
  )
}

export default App