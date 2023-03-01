import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { addStudentRoute} from "../../utils/APIRoutes";

function AddStudent() {
  const navigate = useNavigate();
  const [values,setValues] = useState({
    student_name: "",
    computer_code: "",
    email: "",
    course: "",
    subjects: "",
    _class: "",
  });

  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(handleValidation()){
    const {student_name, email,computer_code,course,_class ,subjects} = values;
      try{const {data}  = await axios.post(addStudentRoute,{
        student_name,
        email,
        computer_code,
        course,
        subjects,
        _class,
      });
      if(data.status === true){
        let mess = student_name+" added successfully.";
        alert(mess);
        navigate("/");
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
    const {student_name, email,subjects,_class } = values;

    if (student_name.length<3){
      toast.error("Student name must be greater than 3 characters", toastOptions);
      return false;
    } else if (email ===""){
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (subjects ===""){
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
      <AddStudentContainer>
        <form onSubmit={(event)=> handleSubmit(event)}>
          <div className='brand'>
            <h1>Add New Student</h1>
          </div>
          
          <input 
          type="text" 
          placeholder="Name" 
          name='student_name' 
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
          placeholder="Computer Code" 
          name='computer_code' 
          onChange={ (e) =>handleChange(e)}
          />

          <input 
          type="text" 
          placeholder="Subjects"
          name='subjects' 
          onChange={ (e) =>handleChange(e)}
          />

          <input 
          type="text" 
          placeholder="Course"
          name='course' 
          onChange={ (e) =>handleChange(e)}
          />

          <input 
          type="string" 
          placeholder="Class" 
          name='_class' 
          onChange={ (e) =>handleChange(e)}
          />
          <button type='submit'>Add Student</button>
        </form>
      </AddStudentContainer>
      <ToastContainer />
    </>
  )
}

const AddStudentContainer = styled.div`
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
        h1{
        color: black;
        text-transform: uppercase;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
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

export default AddStudent;