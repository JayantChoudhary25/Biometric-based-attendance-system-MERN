import React from 'react'
import styled from 'styled-components';

function Welcome() {
  return (
    <WelcomeContainer>
    <div className='brand'>
      <h1>Welcome to the Dashboard</h1>
    </div>
    </WelcomeContainer>
  )
}
const WelcomeContainer = styled.div`
  height: 100%;
  width: 100%;
    display: fixed;
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
        color: #516665;
        text-transform: uppercase;
        margin-left: 300px;
        }
    }
    
`;
export default Welcome;
