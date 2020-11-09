import styled from "styled-components";
import { device } from "../Device";

export const CardContainer = styled.div`
  color: white;
  height: 70vh;

  background-image: url("/image/card-page.jpg");
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: 100% 100%;
  .btn {
    color: white;
    display: flex;
    justify-content: flex-end;
    margin: 50px 50px;
    transition: all 0.5s ease;
    color: rgba(255, 255, 255, 0.6);
    border: 3px solid #c4c4c4;
    width: 140px;
    height: 20px;
    text-align: center;
    line-height: 1;
    font-size: 16px;
    background-color: transparent;
    padding: 10px;
    outline: none;
    border-radius: 25px;
    text-decoration: none;
    &:hover {
      color: #001f3f;
      background-color: #fff;
    }
  }
  @media ${device.mobile} {
    height: 100vh;
  }
`;
export const Name = styled.div`
  text-align: center;
  font-size: 28px;
  font-family: "Arial Black", Gadget, sans-serif;
  padding-top: 15vh;
  color: white;
  @media ${device.mobile} {
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px auto;
  height: 300px;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;
export const Image = styled.div`
  width: 22%;
  img {
    height: 380px;
  }

  @media ${device.mobile} {
    width: 80%;
  }
`;
export const Info = styled.div`
  width: 20%;
  height: 350px;
  font-size: 16px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  @media ${device.mobile} {
    width: 80%;
  }
`;
export const Mana = styled.div`
  font-size: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    width: 25px;
  }
  @media ${device.mobile} {
  }
`;
export const Text = styled.div`
  font-size: 14px;
  background-color:rgb(82, 82, 122);
  padding: 15px;
  
  @media ${device.mobile} {
    
`;
export const Line = styled.div`
font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media ${device.mobile} {
    
`;
