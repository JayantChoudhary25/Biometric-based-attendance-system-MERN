import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("user")){
      navigate("/login");
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>
      <h1>Welcome to dashboard</h1>
    </div>
  )
}
