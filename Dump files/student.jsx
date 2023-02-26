import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Student() {
  const navigate = useNavigate();
  const handleClick1 = () =>{
    navigate("/student/get_all_student");
  }
  const handleClick2 = () =>{
    navigate("/student/add_student");
  }
  const handleClick3 = () =>{
    navigate("/student/update_student");
  }
  const handleClick4 = () =>{
    navigate("/student/delete_student");
  }

  return (
    <>
      <StudentContainer>
          <div className='brand'>
            <h1>Welcome admin to student access</h1>
          </div>
        
        <div className='form'>
            <div className='button' onClick={handleClick1} > 
              Get all students
            </div>
            <div className='button' onClick={handleClick2}>
              Add Student
            </div>
            <div className='button' onClick={handleClick3}> 
              Update Student
            </div>
            <div className='button' onClick={handleClick4}> 
              Delete Student
            </div>
        </div>
        
      </StudentContainer>
    </>
  )
}
const StudentContainer = styled.div`
  height: 95vh;
  width: 82vw;
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
    .form{
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
        .button{
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
export default Student;