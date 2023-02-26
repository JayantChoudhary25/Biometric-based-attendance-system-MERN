import React, { useState , useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components'
import "react-toastify/dist/ReactToastify.css"; 
import Logo from "../assets/logo.svg";
import axios from 'axios';
import { updateTeacherRoute } from '../utils/APIRoutes';

function UpdateTeacher() {
  const navigate = useNavigate();
  const [values,setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(handleValidation()){
      const {password, username, email } = values;
      try{const {data}  = await axios.post(updateTeacherRoute,{
        username,
        email,
        password,
      });
      if(data.status === true){
        localStorage.setItem('user-data',JSON.stringify(data.user) );
      }else{
        toast.error(data.msg, toastOptions );
      }
    }catch(error){
        console.log(error.response.data);
      }
      navigate("/login");
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
    const {password, confirmPassword, username, email } = values;

    if(password !== confirmPassword){
      toast.error("Password and confirm password must be same.", toastOptions);
      return false;
    } else if (username.length<3){
      toast.error("User name must be greater than 3 characters.", toastOptions);
      return false;
    } else if (password.length<8){
      toast.error("Password must be greater than 8 characters.", toastOptions);
      return false;
    } else if (email ===""){
      toast.error("Email is required.", toastOptions);
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
            <h1>Update</h1>
          </div>
          
          <input 
          type="text" 
          placeholder="Username" 
          name='username' 
          onChange={(e)=>handleChange(e)}
          />

          <input 
          type="email" 
          placeholder="Email" 
          name='email' 
          onChange={(e) => handleChange(e)}
          />

          <input 
          type="password" 
          placeholder="Password" 
          name='password' 
          onChange={ (e) =>handleChange(e)}
          />

          <input  
          type="password" 
          placeholder="Confirm Password" 
          name='confirmPassword' 
          onChange={ (e) =>handleChange(e)}
          />

          <button type='submit'>Update User</button>
          <button type='submit'>Delete User</button>

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
        border: 0.1rem solid #997af0 ;
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

export default UpdateTeacher;