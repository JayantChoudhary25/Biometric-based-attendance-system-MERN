import React, {useState} from "react";

export const Register = (props) => {
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
    const [username , setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    } 

    return(
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlfor="username">Full Name</label>
            <input value={username} onChange={(e)=> setName(e.target.value)} type="username" placeholder="Full Name" id="username" name="username"/>
            <label htmlfor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlfor="password">Password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}