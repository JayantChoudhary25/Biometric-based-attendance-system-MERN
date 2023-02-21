import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Welcome from "./../components/welcome";
export default function Dashboard() {

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
        Dashboard
      </header>
    <nav className="sidebar-nav">
 
      <ul>
        <li>
          <a href="/"><i className="ion-bag"></i> <span>Teacher</span></a>
          <ul className="nav-flyout">
            <li>
              <a href="teacher/add_teacher"><i className="ion-ios-color-filter-outline"></i><link to=""></link>Add Teacher</a>
            </li>
            <li>
              <a href="teacher/get_all_teacher"><i className="ion-ios-clock-outline"></i>Get All Teacher</a>
            </li>
            <li>
              <a href="teacher/update_teacher"><i className="ion-android-star-outline"></i>Update Teacher</a>
            </li>
            <li>
              <a href="teacher/delete_teacher"><i className="ion-heart-broken"></i>Delete Teacher</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/"><i className="ion-ios-settings"></i> <span className="">Student</span></a>
          <ul className="nav-flyout">
            <li>
              <a href="/student/add_student"><i className="ion-ios-alarm-outline"></i>Add Student</a>
            </li>
            <li>
              <a href="/student/get_all_student"><i className="ion-ios-camera-outline"></i>Get All Student</a>
            </li>
            <li>
              <a href="/student/update_student"><i className="ion-ios-chatboxes-outline"></i>Update Student</a>
            </li>
            <li>
              <a href="/student/delete_student"><i className="ion-ios-cog-outline"></i>Delete Student</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/"><i className="ion-ios-briefcase-outline"></i> <span className="">Biometric</span></a>
          <ul className="nav-flyout">
            <li>
              <a href="/"><i className="ion-ios-flame-outline"></i>Add New Biometric</a>
            </li>
            <li>
              <a href="/"><i className="ion-ios-lightbulb-outline"></i>Upgrade Biometric</a>
            </li>
            <li>
              <a href="/"><i className="ion-ios-location-outline"></i>Get Biometric</a>
            </li>
          </ul>
        </li>
      </ul>
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
  margin-top:20px;
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
  font-size: 0.75em;
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
  content: "";
  font-family: ionicons;
  font-size: 0.5em;
  width: 10px;
  color: #fff;
  position: absolute;
  right: 0.75em;
  top: 45%;
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
`;