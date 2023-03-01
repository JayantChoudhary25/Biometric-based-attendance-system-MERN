import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';
import {getAllTeacherRoute, getTeacherByIDRoute} from '../../utils/APIRoutes';
import UpdateTeacher from '../../components/update_teacher';
import DeleteTeacher from '../../components/delete_teacher';
import { GrClose } from 'react-icons/gr';

function GetAllTeacher() {
  const navigate = useNavigate();
  const [allTeachers , setAllTeachers] = useState([]);
  const [updateSelected , setUpdateSelected] = useState(false);
  const [deleteSelected , setDeleteSelected] = useState(false);

  const [myvalues,setValues] = useState({
    myteacher_name: "",
    myemail: "",
    myphone_number: "",
    mysubject: "",
    my_class: "",
    myid: "",
  });
  const myfunc = async ()=>{
    const response = await axios.post(getAllTeacherRoute);
    setAllTeachers(response.data.result);
  }
  useEffect(() => {
    myfunc();
  },[]);
  const handleUpdateClick = async (email) => {
    const myData = await axios.post(getTeacherByIDRoute,{email:email} );
    setValues({
      myteacher_name:myData.data.result.teacher_name,
      myemail:myData.data.result.email,
      myphone_number:myData.data.result.phone_number,
      mysubject:myData.data.result.subject,
      my_class:myData.data.result._class,
      myid:myData.data.result._id,
    })
    setUpdateSelected(true);
  };
  
  const handleDeleteClick = async (email) => {
    const myData = await axios.post(getTeacherByIDRoute,{email:email});
    setValues({
      myteacher_name:myData.data.result.teacher_name,
      myemail:myData.data.result.email,
      myphone_number:myData.data.result.phone_number,
      mysubject:myData.data.result.subject,
      my_class:myData.data.result._class,
      myid:myData.data.result._id,
    })
    setDeleteSelected(true);
  };

  const handleCLose = () => {
    setUpdateSelected(false);
    setDeleteSelected(false);
  }
  return (
    <Container>
    <div className='updateform' >
    {
        updateSelected === true ? 
        (
        <div>
          <div className='closebutton' onClick={handleCLose}><GrClose/></div>
          <UpdateTeacher myvalues={myvalues} /> 
        </div>
        ):<></>
    }
    {
        deleteSelected === true ? 
        (
        <div>
          <div className='closebutton' onClick={handleCLose}><GrClose/></div>
          <DeleteTeacher myvalues={myvalues} /> 
        </div>
        ):<></>
    }
    </div>
    <div >
    <div className="container">
            <ul className="responsive-table">
            <li className="table-header">
                <div className="col col-1" ><b>Teacher Name</b></div>
                <div className="col col-2" ><b>Email</b></div>
                <div className="col col-3" ><b>Phone Number</b></div>
                <div className="col col-4" ><b>Subject</b></div>
                <div className="col col-5" ><b>Class </b></div>
                <div className='col col-6' ><b>Update</b></div>
                <div className='col col-7' ><b>Delete</b></div>
              </li>
            </ul>
          </div>
      {allTeachers.map((items,index) =>{
        return(
          <div key={index} className="container">
            <ul className="responsive-table">
              <li className="table-row">
                <div className="col col-1" data-label="Teacher Name">{items.teacher_name}</div>
                <div className="col col-2" data-label="Email">{items.email}</div>
                <div className="col col-3" data-label="Phone Number">{items.phone_number}</div>
                <div className="col col-4" data-label="Subject">{items.subject}</div>
                <div className="col col-5" data-label="Class">{items._class}</div>
                <div className='col col-6' data-label="Update"><button onClick={() => handleUpdateClick(items.email)} className="updatebutton" >Update</button></div>
                <div className='col col-7' data-label="Delete"><button onClick={() => handleDeleteClick(items.email)} className="deleteButton" >Delete</button></div>
              </li>
            </ul>
          </div>
        )        
      })
      }
    </div>
    </Container>
  )
}
export default GetAllTeacher;
const Container = styled.div`
  height: 100%;
  width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #d5f7f6;
  body {
  font-family: 'lato', sans-serif;
}
.container {
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}
.updatebutton{
  height: 2rem;
  background-color: #263440;
  color: #6ffc89;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.3rem;
  font-size: 1rem;
  transition: 0.3s ease-in-out;
    &:hover{
        background-color: #4e0eff ;
        color:white;
    }
  }
.deleteButton{
  height: 2rem;
  background-color: #263440;
  color: #fa6161;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.3rem;
  font-size: 1rem;
  transition: 0.3s ease-in-out;
    &:hover{
        background-color: #4e0eff ;
        color:white;
    }
}
h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
  small {
    font-size: 0.5em;
  }
}
.closebutton {
    position:fixed;
    right:35%;
    top:11%;
    z-index: 4;
    width:  3rem;
    text-align: center;
    background-color: transparent;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius:0.2rem;
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
      &:hover{
          background-color: #997af0 ;
      }
  }
.responsive-table {
  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .table-header {
    background-color: #BFEAF5;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
    cursor: pointer;
        transition: 0.4s ease-in-out;
          &:hover{
              background-color: #e1fcfb ;
          }
  }
  .col-1 {
    flex-basis: 20%;
  }
  .col-2 {
    flex-basis: 20%;
  }
  .col-3 {
    flex-basis: 20%;
  }
  .col-4 {
    flex-basis: 15%;
  }
  .col-5 {
    flex-basis: 10%;
  }
  .clo-6 {
    flex-basis: 5%
  }
  .clo-7 {
    flex-basis: 10%
  }
  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    .table-row{
      
    }
    li {
      display: block;
    }
    .col {
      
      flex-basis: 100%;
      
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
}
`;