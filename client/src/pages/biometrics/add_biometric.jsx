import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {getStudentByComputerCode} from "../../utils/APIRoutes"
function AddBiometric() {
  const [idSelected, setIdSelected] = useState(false);
  const [values,setValues] = useState({
    computer_code: "",
  });

  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(handleValidation()){
    const {computer_code} = values;
      try{
        const myData = await axios.post(getStudentByComputerCode,{computer_code:computer_code} );
        if(myData.data.result != null){
            let mess = " Searched successfully.";
            //console.log(myData.data.result);
            setIdSelected(true);
            alert(mess);
            //navigate("/");
        }else{
            toast.error(myData.msg, toastOptions );
        } 
    }catch(error){
        console.log(error.response.data);
      }
    }
  };

  const handleSubmit1 = async (event) =>{
    event.preventDefault();
    setIdSelected(false);
  };
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleValidation = () => {
    const {computer_code } = values;
    if (computer_code ===""){
      toast.error("Computer code is required.", toastOptions);
      return false;
    } else{
        return true;
    }
  };

  const handleChange = (event) => {
      setValues({...values, [event.target.name]:event.target.value })
  };

  return (
    <>
      {
        idSelected === false ?
        (
          <AddTeacherContainer>
        <form onSubmit={(event)=> handleSubmit(event)}>
          <div className='brand'>
            <h1>Search Student</h1>
          </div>
          
          <input 
          type="text" 
          placeholder="Computer Code" 
          name='computer_code' 
          onChange={(e)=>handleChange(e)}
          />

          <button type='submit'>Search</button>
        </form>
      </AddTeacherContainer>
        ):<>
        <AddTeacherContainer>
        <form onSubmit={(event)=> handleSubmit1(event)}>
          <div className='brand'>
            <h1>Adding finger print of the student</h1>
          </div>
          <input 
          type="text" 
          placeholder="Fingerpint id" 
          name='Fingerprint ID' 
          onChange={(e)=>handleChange(e)}
          />

          <button type='submit'>Search</button>
        </form>
      </AddTeacherContainer>
        </>
      }
      
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

export default AddBiometric;