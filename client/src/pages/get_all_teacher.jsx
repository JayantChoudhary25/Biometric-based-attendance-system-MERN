import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import {getAllTeacherRoute} from '../utils/APIRoutes';
function GetAllTeacher() {

  const [allTeachers , setAllTeachers] = useState([]);
  const myfunc = async ()=>{
    const response = await axios.post(getAllTeacherRoute);
    setAllTeachers(response.data.result);
  }
  useEffect(() => {
    myfunc();
  },[]);

  return (
    <Container>
    <div >
    <div className="container">
            <ul className="responsive-table">
            <li className="table-header">
                <div className="col col-1" >Teacher Name</div>
                <div className="col col-2" >Email</div>
                <div className="col col-3" >Phone Number</div>
                <div className="col col-4" >Subject</div>
                <div className="col col-5" >Class </div>
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
  height: 100vh;
  width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: #d5f7f6;
  body {
  font-family: 'lato', sans-serif;
}
.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}
.container{
        
        }
h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
  small {
    font-size: 0.5em;
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
    flex-basis: 15%;
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