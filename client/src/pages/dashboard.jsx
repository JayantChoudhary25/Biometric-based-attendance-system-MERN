import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Welcome from "./../components/welcome";
import { GiTeacher } from 'react-icons/gi';
import { FaUserGraduate } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { MdPersonAdd } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { TbLayoutDashboard } from 'react-icons/tb';    
import { SlLogout } from 'react-icons/sl';    
export default function Dashboard() {

  const handleclick=()=>{
    localStorage.clear();
    window.location.reload();
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user") ) {
      navigate("/login");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//   const myuser = JSON.parse(localStorage.user);
//   const user = myuser.username;
  
  return (
    <DashboardContainer>
    <>
      <section className="app">
  <aside className="sidebar">
      <header>
      <a href="/">
      <TbLayoutDashboard className="ico" />
        Dashboard
      </a>  
      </header>
    <nav className="sidebar-nav">
 
      <ul>
        <li>
          <a href="/"><i className="ion-bag"></i> <span><GiTeacher className="ico" />  Teacher</span></a>
          <ul className="nav-flyout">
            <li>
              <a href="teacher/add_teacher"><i className="ion-ios-color-filter-outline"></i><link to=""></link><MdPersonAdd className="ico" /> Add Teacher</a>
            </li>
            <li>
              <a href="teacher/get_all_teacher"><i className="ion-ios-clock-outline"></i><FaEye className="ico" /> View Teachers</a>
            </li>
          </ul>
        </li>
        <li></li>
        <li>
          <a href="/"><i className="ion-ios-settings"></i> <span className=""><FaUserGraduate className="ico" />Student</span></a>
          <ul className="nav-flyout">
            <li>
              <a href="/student/add_student"><i className="ion-ios-alarm-outline"></i><MdPersonAdd className="ico" />Add Student</a>
            </li>
            <li>
              <a href="/student/get_all_student"><i className="ion-ios-camera-outline"></i><FaEye className="ico" />View Students</a>
            </li>
          </ul>
        </li>
        <li></li>
        <li>
          <a href="/"><i className="ion-ios-briefcase-outline"></i> <span className=""><MdFingerprint className="ico" />Biometric</span></a>
          <ul className="nav-flyout">
            <li>
              <a href="/biometric/add_biometric"><i className="ion-ios-flame-outline"></i><MdPersonAdd className="ico" />Add Biometric</a>
            </li>
            <li>
              <a href="/biometric/view_biometric"><i className="ion-ios-lightbulb-outline"></i><FaEye className="ico" />View Biometric</a>
            </li>
          </ul>
        </li>
      </ul>
      <a href="/login"><i className='cta btn-primary'></i><button onClick={handleclick}><SlLogout className="out"/> LogOut</button></a>
    </nav>
  </aside>
  <span className="side">
    <Welcome/>
  </span>
</section>
    </>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  @import "bourbon";
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600);
body {
  font-family: "Lato";
  font-size: 100%;
  overflow-y: scroll;
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background-color: #fefefe;
}

a {
  text-decoration: none;
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
a:hover {
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  transition: all 0.6s ease;
}

.app {
  height: 100vh;
}
.ico{
  margin-right: 10px;
  position: relative;
}
.out{
  margin-right: 5px;
  position: relative;
}
/* -------------
Sidebar
----------------*/
.sidebar {
  position: absolute;
  width: 17%;
  height: 100%;
  top: 0;
  overflow: hidden;
  background-color: #19222a;
  -webkit-transform: translateZ(0);
  visibility: visible;
  -webkit-backface-visibility: hidden;
}
.sidebar header {
  background-color: #09f;
  width: 100%;
  display: block;
  font-size: 20px;
  padding: 0.75em 1em;
}

/* -------------
Sidebar Nav
----------------*/
.sidebar-nav {
  position: fixed;
  background-color: #19222a;
  height: 100%;
  font-weight: 400;
  font-size: 1.2em;
  overflow: auto;
  padding-bottom: 6em;
  z-index: 9;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  /* -------------
  Chev elements
  ----------------*/
  /* -------------
  Nav-Flyout
  ----------------*/
  /* -------------
  Hover
  ----------------*/
}
.sidebar-nav ul {
  list-style: none;
  display: block;
  padding: 0;
  margin: 0;
  margin-top:40px;
  margin-bottom:20px;
}
.sidebar-nav ul li {
  margin-left: 0;
  padding-left: 0;
  display: inline-block;
  width: 100%;
  /* -------------
  Sidebar: icons
  ----------------*/
}
.sidebar-nav ul li a {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9em;
  padding: 1.05em 1em;
  position: relative;
  display: block;
}
.sidebar-nav ul li a:hover {
  background-color: rgba(0, 0, 0, 0.9);
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.sidebar-nav ul li i {
  font-size: 1.8em;
  padding-right: 0.5em;
  width: 9em;
  display: inline;
  vertical-align: middle;
}
.sidebar-nav > ul > li > a:after {
  content: "⬅";
  font-family: ionicons;
  font-size: 1.2rem;
  color: white;
  position: absolute;
  right: 0.75em;
  top: 30%;
}
.sidebar-nav .nav-flyout {
  position: absolute;
  background-color: #080D11;
  z-index: 9;
  left: 2.5em;
  top: 0;
  height: 100vh;
  -webkit-transform: translateX(100%);
  -moz-transform: translateX(100%);
  -ms-transform: translateX(100%);
  -o-transform: translateX(100%);
  transform: translateX(100%);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.sidebar-nav .nav-flyout a:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
.sidebar-nav ul > li:hover .nav-flyout {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
button{
        background-color: #263440;
        color: white;
        padding: 1rem 2rem;
        border: none;
        position: fixed;
        bottom: 50px;
        left: 50px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.5s ease-in-out;
          &:hover{
              background-color: #4e0eff ;
          }
        }
`;