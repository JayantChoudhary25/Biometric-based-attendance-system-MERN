import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { deleteStudentRoute} from "../utils/APIRoutes";

function DeleteStudent({myvalues}) {
 
  const [values,setValues] = useState({
    student_name: myvalues.mystudent_name,
    email: myvalues.myemail,
    phone_number: myvalues.myphone_number,
    subject: myvalues.mysubject,
    _class: myvalues.my_class,
    _id: myvalues.myid,
  });

  const handleSubmit = async (event) =>{
    event.preventDefault();
    
    const {student_name, email,phone_number,subject,_class ,_id} = values;
      try{const {data}  = await axios.post(deleteStudentRoute,{
        student_name,
        email,
        phone_number,
        subject,
        _class,
        _id,
      });
      if(data.status === true){
        let mess = student_name+" Deleted successfully.";
        alert(mess);
        window.location.reload();
      }else{
        toast.error(data.msg, toastOptions );
      }
    }catch(error){
        console.log(error.response.data);
      }
    
  };

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
      setValues({...values, [event.target.name]:event.target.value })
  };

  return (
    <>
      <AddStudentContainer>
      <form onSubmit={(event)=> handleSubmit(event)}>
          <div className='brand'>
            <h1>Are you sure you want to Delete {values.student_name}</h1>
          </div>
          <button type='submit' className='subbmitbutton'>Delete</button>
        </form>
      </AddStudentContainer>
      <ToastContainer />
    </>
  )
}

const AddStudentContainer = styled.div`
  position:fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: transparent;
    backdrop-filter: blur(5px);
    border-radius: 1.5rem;
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
        width:22vw;
        flex-direction: column;
        gap: 2rem;
        background-color: #EEEEEE;
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
        .subbmitbutton{
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

export default DeleteStudent;