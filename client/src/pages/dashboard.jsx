import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import styled from "styled-components";

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FormContainer>
        <nav className="main-nav">
          {/* 1st logo */}
          <div className="logo">
            <h2>Dashboard</h2>
          </div>
          {/* 2nd menu */}
          <div className="menu-link">
            <ul>
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="teacher">Teacher</a>
              </li>
              <li>
                <a href="student">Student</a>
              </li>
              <li>
                <a href="bio">Biometric</a>
              </li>
            </ul>
          </div>
          {/* 3rd Social Media */}
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a
                  href="https://www.instagram.com/ipsacademyindore/?hl=en"
                  target="_ips">
                  <FaInstagramSquare className="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* section */}
        <section className="section">
          <p>Welcome to Dashboard</p>
        </section>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Jost", sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  /* navbar style start  */

  .main-nav {
    width: 100%;
    height: 10rem;
    display: grid;
    grid-template-columns: 5rem 1fr 2fr 1fr 5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .logo {
    display: grid;
    grid-column: 2/3;
    justify-content: start;
    align-items: center;
  }

  .menu-link {
    grid-column: 3/4;
  }

  .menu-link ul {
    height: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .social-media {
    grid-column: 4/5;
  }

  .social-media ul {
    height: 10rem;
    display: grid;
    grid-template-columns: 3fr repeat(3, 1fr);
    align-items: center;
    justify-content: flex-end;
  }

  .social-media ul li {
    text-align: right;
  }

  .social-media ul li:first-child {
    grid-column: 2/3;
  }

  /* ----------- Grid part ends ----------------- */

  .logo h2 {
    font-size: 2.5rem;
    font-weight: 400;
    text-transform: uppercase;
    background: -webkit-linear-gradient(#eee, rgb(69, 57, 248));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .logo h2 span {
    font-size: 3.5rem;
  }

  .menu-link ul li {
    font-size: 1.8rem;
  }

  .menu-link ul li a {
    text-transform: capitalize;
    color: rgba(0, 0, 3, 0.8);
    transition: 0.5s;
  }
  .menu-link ul li:hover > a {
    transform-origin: left;
    color: rgba(0, 0, 3, 1);
    text-decoration: underline;
    transition: 0.5s;
  }

  .social-media ul li {
    font-size: 1.8rem;
  }

  .social-media .hamburger-menu {
    display: none;
  }

  .instagram {
    color: #c32aa3;
  }

  /* hero section   */

  .section {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .section p {
    font-size: 3rem;
    text-transform: capitalize;
  }

  .section h1 {
    font-size: 5rem;
    text-transform: uppercase;
    text-align: center;
  }

  /* responsive css style  */
  @media (max-width: 1080px) {
    .main-nav {
      height: 8rem;
      grid-template-columns: 2rem 3fr 3fr 1fr 2rem;
    }

    .logo,
    .menu-link ul,
    .social-media ul {
      height: 8rem;
    }
  }

  /* responsive css style  */
  @media (max-width: 998px) {
    .main-nav {
      height: 7rem;
      grid-template-columns: 2rem 2fr 3fr 2rem 2rem;
    }

    .menu-link {
      display: none;
    }

    .logo,
    .social-media ul {
      height: 7rem;
    }

    .mobile-menu-link {
      grid-column: 2/4;
      position: relative;
      z-index: 99;
    }

    .mobile-menu-link {
      background-color: white;
      height: 20rem;
      display: grid;
      grid-column: 2/5;
      align-items: center;
      padding-left: 3rem;
      transition: all 2s linear;
      transform-origin: top;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }

    .mobile-menu-link ul {
      height: 20rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: start;
    }

    .mobile-menu-link ul li:first-child {
      transition-delay: 0.2s;
    }

    .social-media {
      grid-row: 1/2;
      grid-column: 3/5;
      justify-items: end;
      align-items: center;
      transition: all 2s linear;
    }

    .social-media .social-media-desktop {
      height: 0;
      display: none;
    }

    .social-media {
      height: 7rem;
      display: flex;
      justify-self: end;
      align-items: center;
    }

    .social-media .hamburger-menu {
      display: block;
      font-size: 2.5rem;
    }
  }

  @media (max-width: 798px) {
    .main-nav {
      height: 6rem;
      grid-template-columns: 1rem 2fr 1fr 1fr 1rem;
    }

    .logo,
    .social-media ul {
      height: 6rem;
    }

    .social-media {
      height: 6rem;
      display: flex;
      justify-self: end;
      align-items: center;
    }

    .social-media .hamburger-menu {
      display: block;
      font-size: 2.5rem;
    }
  }

  @media (max-width: 520px) {
    .main-nav {
      height: 6rem;
      grid-template-columns: 1rem 4fr 1fr 1fr 1rem;
    }

    .logo,
    .social-media ul {
      height: 6rem;
    }

    .logo h2 {
      font-size: 2rem;
    }

    .social-media {
      height: 6rem;
      display: flex;
      justify-self: end;
      align-items: center;
    }

    .social-media .hamburger-menu {
      display: block;
      font-size: 2.5rem;
    }

    /* hero section  */

    .section h1 {
      font-size: 3.8rem;
    }
  }
`;