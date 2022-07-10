import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled from 'styled-components';
import './index.css'
import background1 from './img/background.webp'

const Body = styled.body `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height:100vh;
  width:100%;
  background-image: url(${background1});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Body>
    <App />
    </Body>
);


