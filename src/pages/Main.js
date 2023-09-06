import React from "react";
import { BrowserRouter } from "react-router-dom";
import { styled } from "styled-components";
import "./../index.css";
import mainPic from "./../img/picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


const MainBox = styled.div`
  width: 300px;
  height: 500px;
  background-color: #fff;
  border-radius: 30px;
  margin: 200px auto;
  position: relative;
  overflow: hidden;
`;
const Name = styled.h3`
  display: flex;
  justify-content: center;
  color: black;
`;

const Profile = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: absolute;
  top:-40px;
  right:-40px;
`;

const TextFlex = styled.div`
  padding-top: 250px;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #e7e7e7;
`;

function Main() {
  return (
    <>
      <MainBox>
        <Profile className="Pic" src={mainPic} alt="main" />
        <TextFlex>
        <Name>SEBASTIAN KOLB</Name>
          <p>pixel and magic</p>
          <p>@mypage interection</p>
          <FontAwesomeIcon icon={faTwitter}
             />
        </TextFlex>
      </MainBox>
    </>
  );
}

export default Main;
