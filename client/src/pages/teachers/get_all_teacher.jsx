import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';
import {getAllTeacherRoute, getTeacherByIDRoute} from '../../utils/APIRoutes';
import UpdateTeacher from '../../components/update_teacher';
import { GrClose } from 'react-icons/gr';

function GetAllTeacher() {
  const navigate = useNavigate();
  const [allTeachers , setAllTeachers] = useState([]);
  const [updateSelected , setUpdateSelected] = useState(false);
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
  const handleClick = async (email) => {
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

  const handleCLose = () => {
    setUpdateSelected(false);
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
    </div>
    <div >
    <div className="container">
            <ul className="responsive-table">
            <li className="table-header">
                <div className="col col-1" >Teacher Name</div>
                <div className="col col-2" >Email</div>
                <div className="col col-3" >Phone Number</div>
                <div className="col col-4" >Subject</div>
                <div className="col col-5" >Class </div>
                <div className='col col-6' >Update</div>
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
                <div className='col col-6' data-label="Update"><button onClick={() => handleClick(items.email)} className="updatebutton" >Update</button></div>
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
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.3rem;
  font-size: 1rem;
  transition: 0.5s ease-in-out;
    &:hover{
        background-color: #4e0eff ;
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
    top:5%;
    z-index: 2;
    width:3rem;
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
    margin-bottom: 25px;
  }
  .table-header {
    background-color: #BFEAF5;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
    cursor: pointer;
        transition: 0.4s ease-in-out;
          &:hover{
              background-color: #EAFDFC ;
          }
  }
  .col-1 {
    flex-basis: 20%;
  }
  .col-2 {
    flex-basis: 30%;
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