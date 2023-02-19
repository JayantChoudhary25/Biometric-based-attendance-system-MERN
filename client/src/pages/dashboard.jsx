import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Teacher from '.././components/teacher';
import Student from '.././components/student';
import Biometric from '.././components/biometric';
import Welcome from "../components/welcome";
import RenderMyState from "../components/renderMyState";

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const myuser = JSON.parse(localStorage.user);
  const user = myuser.username;
  const [myState , setMyState] = useState("0");

  
  const handleClick = ( state ) => {
    setMyState(state);
  }
  
  return (
    <>
      <DashboardContainer>
      <div className="sidebar active">
        <div className="logo_content">
            <div className="logo">
                <i className='bx bxl-c-plus-plus' style={{fontSize:"30px" }}></i>
                <div className="logoname" style={{marginLeft: "5px"}}>Attendance Home</div>
            </div>
            <i className='bx bx-menu-alt-right' id="btn" style={{fontSize:"25px" }}></i>
        </div>
        <ul className="nav_list">
            {/*
            FOR SEARCH BAR 
            <li>
                
                <i className='bx bx-search'></i>
                <input type="text" placeholder="Search..." />
                <span className="tooltip">Search</span>
            </li> */}
            <li>
                <div onClick={handleClick("1")} name="Teacher">
                <a>
                    <i className='bx bx-grid-alt'></i>
                    <span className="link_names">Teacher</span>
                </a>
                </div>
                <span className="tooltip">Teacher</span>
            </li>
            <li>
                <div onClick={handleClick("2")} name="Student">
                <a href="http://localhost:3000/">
                    <i className='bx bx-user' ></i>
                    <span className="link_names">Student</span>
                </a>
                </div>
                <span className="tooltip">Student</span>
            </li>
            <li>
                <div onClick={handleClick("3")} name="Biometric">
                <a href="http://localhost:3000/">
                    <i className='bx bx-chat' ></i>
                    <span className="link_names">Biometric</span>
                </a>
                </div>
                <span className="tooltip">Messages</span>
            </li>
        </ul>
        <div className="profile_content">
            <div className="profile">
                <div className="profile_details">
                    <div className="name_job">
                        <div className="name">{user}</div>
                        <div className="job">Admin</div>
                    </div>
                </div>
                <i className='bx bx-log-out' id="log_out"></i>
            </div>
        </div>
    </div>
    <div className="home_content">
    
        <div className="text"><RenderMyState state={myState} /></div>
    </div>
      </DashboardContainer>
    </>
  );
}

const DashboardContainer = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap);
*{
    justify-content:center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
}
body{
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
}
.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 60px;
    background: #11101d;
    padding: 2px 6px;
    transition: all 0.5s ease;
}
.sidebar.active{
    width: 15vw;
}
.sidebar .logo_content .logo{
    color: #fff;
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    font-size: 20px;
    opacity: 0;
    pointer-events: none;
    margin-bottom: 170px;
}
.sidebar.active .logo_content .logo{
    opacity: 1;
    pointer-events: none;
}
.logo_content.logo i{
    font-size: 28px;
    margin-right: 5px;
}
.logo_content .logo .logo_name{
    font-size: 20px;
    font-weight: 400;
}
.sidebar #btn{
    position: absolute;
    color: #fff;
    left: 50%;
    top: 6px;
    font-size: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    transform: translateX(-50%);
}
.sidebar.active #btn{
    left: 90%;
}
.sidebar ul{
    margin-top: 20px;
}
.sidebar ul li{
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 0 50px;
    line-height: 50px;
    margin-bottom: 40px;
}
.sidebar ul li .tooltip{
    position: absolute;
    left: 122px;
    top: 0;
    transform: translate(-50%,-50%);
    border-radius: 6px;
    height: 35px;
    width: 122px;
    background: #fff;
    line-height: 35px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0s ;
    opacity: 0;
    pointer-events: none;
    display: block;
}
.sidebar.active ul li .tooltip{
    display: none;
}
.sidebar ul li:hover .tooltip{
    transition: all 0.5s ease;
    opacity: 1;
    top: 50%;
}
.sidebar ul li input{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    outline: none;
    border: none;
    background: #1d1b31;
    padding-left: 50px;
    font-size: 18px;
    color: #fff;
}
.sidebar ul li .bx-search{
    position: absolute;
    z-index: 99;
    color: #fff;
    font-size: 22px;
    transition: all 0.5s ease;
}
.sidebar ul li .bx-search:hover{
    background: #fff;
    color: #11101d;
}
.sidebar.active ul li .bx-search:hover{
    background: #1d1b31;
    color: #fff;
}
.sidebar ul li a{
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    border-radius: 12px;
    white-space: nowrap;
}
.sidebar ul li a:hover{
    background: #fff;
    color: #11101d;
}
.sidebar ul li i{
    height: 50px;
    min-width: 50px;
    border-radius: 12px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
}
.sidebar .link_names{
    opacity: 0;
    pointer-events: none;
}
.sidebar.active .link_names{
    opacity: 1;
    pointer-events: auto;
}

.sidebar .profile_content{
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
}
.sidebar .profile_content .profile{
    position: relative;
    padding: 10px 6px;
    height: 60px;
    background: #1d1b31;
}
.profile_content .profile .profile_details{
    display: flex;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
}
.sidebar.active .profile .profile_details{
    opacity: 1;
    pointer-events: auto;
}
.profile .profile_details img{
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 12px;
}
.profile .profile_details .name_job{
    margin-left: 10px;
}
.profile .profile_details .name{
    font-size: 15px;
    font-weight: 400;
}
.profile .profile_details .job{
    font-size: 12px;
}
.profile #log_out{
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
    min-width: 50px;
    line-height: 50px;
    font-size: 20px;
    border-radius: 12px;
    text-align: center;
}
.profile #log_out:hover{
    background: #fff;
    color: #11101d;
}
.sidebar.active .profile #log_out {
    left: 88%;
}
.home_content{
    position: absolute;
    left: 60px;
    width: calc(100%-60px);
}
.sidebar.active ~ .home_content{
    left: 240px;
    width: calc(100% - 240px);
}
.home_content .text{
    font-size: 25px;
    font-weight: 500;
    color: #1d1b31;
    margin: 12px;
}
`;
