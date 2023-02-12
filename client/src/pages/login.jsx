import React, { useState , useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import "react-toastify/dist/ReactToastify.css"; 
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';
import Logo from "../assets/logo.svg";

function Login() {
  const navigate = useNavigate();
  const [values,setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if(localStorage.getItem("user")){
    //   navigate("/");
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(handleValidation()){
      const {password, email} = values;
      try{
      const {data}  = await axios.post(loginRoute,{
        email,
        password,
      });
      
      if(data.status === false){
        toast.error(data.msg, toastOptions );
      }
      if(data.status === true){
        localStorage.setItem('user',JSON.stringify(data.user) );
        navigate("/");  
      }}catch(error){
        console.log(error.response.data);
      }
      
    }
  };

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleValidation = () => {
    const {password, username} = values;

    if(password === ""){
      toast.error("Username & password is required.", toastOptions);
      return false;
    } else if (username === ""){
      toast.error("Username & password is required.", toastOptions);
      return false;
    } else {
      return true; 
    }
  };

  const handleChange = (event) => {
      setValues({...values, [event.target.name]:event.target.value })
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event)=> handleSubmit(event)}>
          <div className='brand'>
            <img src={Logo} alt='Logo' />
            <h1>Login</h1>
          </div>
          
          <input 
          type="text" 
          placeholder="Email" 
          name='username' 
          onChange={(e)=>handleChange(e)}
          min="3"
          />

          <input 
          type="password" 
          placeholder="Password" 
          name='password' 
          onChange={ (e) =>handleChange(e)}
          />

          <button type='submit'>Login User</button>

          <span>
          Don't have an account? <Link to="/register" >Register</Link> 
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #d5f7f6;
    .brand{
        display: flex ;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img{
            height: 5rem;
        } 
        h1{
        color: black;
        text-transform: uppercase;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #BFEAF5;
        border-radius: 2rem;
        padding: 3rem 5rem;
        input{
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #997af0;
        border-radius: 0.4rem;
        color: black;
        width: 100%;
        font-size: 1rem;
        &:focus {
            border: 0.1rem solid #4e0eff;
            outline : none;
        }
        }
        button{
        background-color: #997af0;
        color: white;
        padding: 1rem 2rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.4s ease-in-out;
          &:hover{
              background-color: #4e0eff ;
          }
        }
        span{
        color: black;
        text-transform: uppercase;
        a {
            color: #4e0eff;
            text-decoration: none;
            font-weight: bold;
        }
        } 
      }
`;

export default Login;