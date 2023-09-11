import React from "react";
import { BrowserRouter } from "react-router-dom";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFilm, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./../index.css";



const MainBox = styled.div`
  width: 300px;
  height: 500px;
  background-color: #fff;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* position: relative; */
  overflow: hidden;
  
`;

const Name = styled.h3`
  height: 10px;
  padding-top: 10px;
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
  p{
    height: 1px;
    
  }
`;
const Icon = styled.div`
  width: 200px ;
  height: 100px;
  display: flex;
  justify-content: space-around;
  color: black;
  padding-top: 100px;


`

function Main() {
  return (
    <> 
    
      <MainBox>
      
          <Profile src='/images/picture.png' alt='Mainlogo'        />
            
            <TextFlex>
            
            <Name>SEBASTIAN KOLB</Name>
               <p>pixel and magic</p>
                <p>@mypage interection</p>
              <Icon>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faGlobe} />
                <FontAwesomeIcon icon={faFilm} />
              </Icon>
            
            </TextFlex>
      </MainBox>
   
    </>
  );
}

export default Main;
