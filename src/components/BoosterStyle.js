import styled from "styled-components";
import { device } from "./Device";


export const CardBooster = styled.div`
background-image: url("/image/booster-page.jpg");
height: 70vh;
padding-top: 50px; 
@media ${device.mobile} {
    height: 70vh;
    
  }
`

export const Titre = styled.h1`
text-align: center;
font-family: "Arial Black", Gadget, sans-serif;
background-color: rgba(0, 0, 0, 0.7);
color: white;
padding: 3vh;
font-size: 40px;

@media ${device.mobile} {
    font-size: 20px;
    
  }
`
export const SetForm = styled.form `
display:flex;
justify-content: space-around;
@media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
` 

export const Select = styled.select`
margin: 50px;
padding: 10px;
width: 50vw;
@media ${device.mobile} {
    width: 90vw;
    margin-left:18px;
  }

`
export const Input = styled.input`
color: white;
    
    margin: 50px 50px;
    transition: all 0.5s ease;
    color: rgba(255, 255, 255, 0.6);
    border: 3px solid #c4c4c4;
    width: 140px;
    height: 50px;
    text-align: center;
    font-size: 16px;
    background-color: transparent;
    border-radius: 25px;
    &:hover {
      color: #001f3f;
      background-color: #fff;
    }
    @media ${device.mobile} {
        width: 80vw;
        margin-left:35px;
      }
`
export const Option = styled.option`
background-color: black;

`
