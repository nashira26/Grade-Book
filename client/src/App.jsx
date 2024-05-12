import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header';
import Profile from './pages/Profile';
import Class from './pages/Class';
import SubjectSchedule from './pages/SubjectSchedule';
import SubjectSchedules from './pages/SubjectSchedules';
import PrivateRoute from './components/PrivateRoute'
import ClassSchedules from './pages/ClassSchedules';
import ClassSchedule from './pages/ClassSchedule';
import Student from './pages/Student';
import { Divider } from 'semantic-ui-react';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Divider/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sign-in' element={<SignIn/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/class' element={<Class/>}></Route>
      <Route path='/student' element={<Student/>}></Route>
      <Route path='/class-schedules' element={<ClassSchedules/>}></Route>
      <Route path='/class-schedule' element={<ClassSchedule/>}></Route>
      <Route path='/subject-schedules' element={<SubjectSchedules/>}></Route>
      <Route path='/subject-schedule' element={<SubjectSchedule/>}></Route>
      <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App