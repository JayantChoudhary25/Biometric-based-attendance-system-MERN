import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import GetAllTeacher from './pages/get_all_teacher';
import AddTeacher from './pages/add_teacher';
import UpdateTeacher from './pages/update_teacher';
import DeleteTeacher from './pages/delete_teacher';
import UpdateStudent from './pages/update_student';
import DeleteStudent from './pages/delete_student';
import AddStudent from './pages/add_student';
import GetAllStudent from './pages/get_all_student';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path="/register" element={<Register /> }></Route>
        <Route path="/login" element={<Login /> }></Route>
        <Route path='/teacher/get_all_teacher' element={<GetAllTeacher/>}/>
        <Route path='/teacher/add_teacher' element={<AddTeacher/>}/>
        <Route path='/teacher/update_teacher' element={<UpdateTeacher/>}/>
        <Route path='/teacher/delete_teacher' element={<DeleteTeacher/>}/>
        <Route path='/student/add_student' element={<AddStudent/>}/>
        <Route path='/student/get_all_student' element={<GetAllStudent/>}/>
        <Route path='/student/update_student' element={<UpdateStudent/>}/>
        <Route path='/student/delete_student' element={<DeleteStudent/>}/>
      </Routes>
    </BrowserRouter>
  ); 
}
