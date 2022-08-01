import styled from "styled-components"

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items : center;
  width: 90vw;
  gap: 1rem;


`
export const Box = styled.div `
display: flex; 
img{
    width:15vw;
  }
h1{margin-bottom:0;}
p {text-align: center;
    margin-top:0;
    margin-bottom:10vh;
font-family:'IBM Plex Sans';
}
flex-direction: column;
align-items : center;
margin: 15vh 5vw;
width: 90vw;
`
export const Line = styled.hr `
    height:2px;
    border:none;
    background:linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    width:100%;
`