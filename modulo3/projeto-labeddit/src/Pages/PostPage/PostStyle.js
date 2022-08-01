import styled from "styled-components";

export const Line = styled.hr `
    height:2px;
    border:none;
    background:linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    width:100%;
`
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
p {text-align: center;
    margin-top:0;
font-family:'IBM Plex Sans';
}
h1{
    margin-bottom:15vh;
    font-size: 33px;
}
flex-direction: column;
align-items : center;
margin: 10vh 5vw;
width: 90vw;
height: 100vh;
gap: 2vh;
`
export const CommentBox = styled.div`
border: 1px solid #E0E0E0;
border-radius: 12px;
background: #FBFBFB;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;
width: 90vw;
div{
    display:flex;
    gap: 2vw;
    justify-content:center;
    align-items:center;
    border: 1px solid #ECECEC;
    border-radius: 28px;
    min-width:20vw;
    height: 4vh;
}
button{
    border: none;
    background-color:inherit;
}
img{
    width: 3vw;
    height:3vw;
}
`