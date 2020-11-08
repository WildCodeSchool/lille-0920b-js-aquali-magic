import styled from "styled-components";
import { device } from "../Device";

export const CardContainer = styled.div`
  color: white;
  height: 70vh;

  background-image: url("/image/card-page.jpg");
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: 100% 100%;
  @media ${device.mobile} {
  }
`;
export const Name = styled.div`
  text-align: center;
  font-size: 24px;
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
  }
`;
export const Image = styled.div`
  width: 20%;
  height: 320px;

  @media ${device.mobile} {
  }
`;
export const Info = styled.div`
  width: 20%;
  height: 300px;
  font-size: 16px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  @media ${device.mobile} {
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
    
`;
export const Text = styled.div`
  font-size: 14px;
  background-color:rgb(82, 82, 122);
  padding: 15px;
  
  @media ${device.mobile} {
    
`;
export const Line = styled.div`
font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media ${device.mobile} {
    
`;
