import { faSquareFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faEye, faFontAwesome, faHeart, faLocation, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";


const BgImg = styled.div`
  background-image: url("/images/다운로드.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: wheat;
  width: 300px;
  height: 500px;
  margin: 200px auto;
  /* filter: grayscale(100%); */
`
const MarginPage = styled.div`
  padding-top: 200px
  ;
`
const FlexMode = styled.div`
 
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: start;
 white-space: nowrap;
 margin-left: 10px;
 h3{
  font-size: 30px;
  font-weight: bold;
  padding-top: 10px;
 }
 span{
  line-height: 60%;
 }
`
const SpanFLex = styled.div `
  display: flex;
  column-gap: 5px;
  
`
const FootFlex = styled.div`
  
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 10px;
    padding: 0 20px 0 5px;
span{
  padding-top: 20px;
  margin-top: 20px;
  text-align: center;
  letter-spacing: -0.5px;
}
p{
  font-size: 26px;
  margin-bottom: 5px;
  line-height: 10px;
  font-weight: bold;
  text-align: center;
}
`
const Profile = styled.div`
    width: 300px; height: 300px;
    background-color: #fff;
    border: 1px solid #eee;
    position: relative;  
    box-sizing: border-box;
`
const ProfileImg = styled.div`
  width: 80px; height: 80px;
  background-image: url("/images/다운로드.jpg");
  background-size: contain;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: -40px;
  filter: grayscale(100%);  
`
const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 170px;
    
    width: 100px; height: 40px;
    background-color: black; border-radius: 5px; color: white;
`

// Navigate

function Counter() {
  return (
    <>
      <BgImg>
       
       <MarginPage>
        <Profile>          
          
          <ProfileImg />
          

        <FlexMode>
              
              <h3>Neel Litoriya</h3>
            <SpanFLex>
              <FontAwesomeIcon icon={faHeart} style={{color :'hotpink'}} size="sm" /><span>photographer</span>  
            </SpanFLex> 
              <NavLink><AddButton>+ Add</AddButton></NavLink>
            <SpanFLex>
              <FontAwesomeIcon icon={faLocation} size="sm" color="c9c9c9" />         
              <span>Indore, india</span>
             </SpanFLex>
            
        </FlexMode>
        
        
              <FootFlex>
                <FontAwesomeIcon icon={faEye} size="sm" color="c9c9c9" /><span>views <br /><p>624</p> </span>
                <FontAwesomeIcon icon={faStar} size="sm" color="c9c9c9" /><span>Followers <br /><p>142</p> </span> 
                <FontAwesomeIcon icon={faHeart} size="sm" color="c9c9c9"/><span>Likes<br /><p>104</p> </span>
              </FootFlex> 

        
       
        </Profile>
      </MarginPage>       
    </BgImg>
    </>
  );
}

export default Counter;
