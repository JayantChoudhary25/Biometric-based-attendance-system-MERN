import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { addTeacherRoute} from "../../utils/APIRoutes";

function AddTeacher() {
  const navigate = useNavigate();
  const [values,setValues] = useState({
    teacher_name: "",
    email: "",
    phone_number: "",
    subject: "",
    _class: "",
  });

  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(handleValidation()){
    const {teacher_name, email,phone_number,subject,_class } = values;
      try{const {data}  = await axios.post(addTeacherRoute,{
        teacher_name,
        email,
        phone_number,
        subject,
        _class,
      });
      if(data.status === true){
        let mess = teacher_name+" added successfully.";
        alert(mess);
        navigate("/teacher");
      }else{
        toast.error(data.msg, toastOptions );
      }
    }catch(error){
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
    const {teacher_name, email,subject,_class } = values;

    if (teacher_name.length<3){
      toast.error("Teacher name must be greater than 3 characters.", toastOptions);
      return false;
    } else if (email ===""){
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (subject ===""){
      toast.error("Subject is required.", toastOptions);
      return false;
    } else if (_class ===""){
      toast.error("Class is required.", toastOptions);
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
      <AddTeacherContainer>
        <form onSubmit={(event)=> handleSubmit(event)}>
          <div className='brand'>
            <h1>Add new teacher</h1>
          </div>
          
          <input 
          type="text" 
          placeholder="Name" 
          name='teacher_name' 
          onChange={(e)=>handleChange(e)}
          />

          <input 
          type="email" 
          placeholder="Email" 
          name='email' 
          onChange={(e) => handleChange(e)}
          />

          <input 
          type="string" 
          placeholder="Phone Number" 
          name='phone_number' 
          onChange={ (e) =>handleChange(e)}
          />

          <input 
          type="text" 
          placeholder="Subject"
          name='subject' 
          onChange={ (e) =>handleChange(e)}
          />

          <input 
          type="string" 
          placeholder="Class" 
          name='_class' 
          onChange={ (e) =>handleChange(e)}
          />
          <button type='submit'>Add Teacher</button>
        </form>
      </AddTeacherContainer>
      <ToastContainer />
    </>
  )
}

const AddTeacherContainer = styled.div`
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

export default AddTeacher;