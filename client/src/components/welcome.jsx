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
        color: #516665;
        text-transform: uppercase;
        }
    }
    
`;
export default Welcome;
