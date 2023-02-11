import React, {useState} from "react";
import styled from 'styled-components';

export const Register = (props) => {
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
    const [username , setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    } 

    return(
        <FormContainer>
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlfor="username">Full Name</label>
            <input 
                value={username} 
                onChange={(e)=> setName(e.target.value)} 
                type="username" 
                placeholder="Full Name" 
                id="username" 
                name="username"
            />
            <label htmlfor="email">Email</label>
            <input 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
                type="email" 
                placeholder="youremail@gmail.com" 
                id="email" 
                name="email"
            />
            <label htmlfor="password">Password</label>
            <input 
                value={pass} 
                onChange={(e)=> setPass(e.target.value)} 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password"
            />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    .auth-form-container, .login-form, .register-form{
     display: flex;
     flex-direction: column;
    }

    @media screen and (min-width: 600px){
      .auth-form-container {
        padding: 5rem;
        border: 1px solid white;
        border-radius: 10px;
        margin: 0.5rem;
      }
    }
    label {
      text-align: left;
      padding: 0.25rem 0;
    }
    input {
      margin: 0.5rem 0;
      padding: 1rem;
      border: none;
      border-radius: 10px;
    }
    button {
      border: none;
      background-color: white ;
      padding: 20px;
      border-radius: 10px;
      cursor: pointer;
      color: #C66FBC;
    }
    .link-btn {
      background: none;
      color: white;
      text-decoration: underline;
    }
`;