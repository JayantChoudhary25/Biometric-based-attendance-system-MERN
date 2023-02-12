import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Teacher from './pages/teacher';
import Student from './pages/student';
import Biometric from './pages/biometric';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path="/register" element={<Register /> }></Route>
        <Route path="/login" element={<Login /> }></Route>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/bio' element={<Biometric/>}/>     
      </Routes>
    </BrowserRouter>
  ); 
}
