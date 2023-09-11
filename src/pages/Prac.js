import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Globalstyle from '../component/Globalstyle'


const MypageWrap = styled.body`
width: 100%; height: 100%; 
`
const MypageMenubarPink = styled.nav`
  width: 1300px;
  height: 100px;
  margin: auto;
  display: flex; justify-content: space-around; align-items: center;
  background-color: hotpink;
`
const MypageSideMenubarYellow = styled.div`
background-color: yellow;
width: 200px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin-left: -300px;

li{
   
}
p{
   padding: 10px;
}
  



`

const MypageButton= styled.div`

width: 120px; height: 30px; background-color: #fff; 
border: 1px solid red; display: flex; justify-content: center;
border-radius: 5px; align-items: center;
;

`
const MypagePurple = styled.div `
   width: 1200px; height: 800px; background-color: violet; margin: 100px auto;

h1{
   font-size: 70px;
   margin:  100px 100px;


}
`

function Prac() {
  return (
  
    <>
   <MypageWrap>
      <MypageMenubarPink>
       
        <li>
           <MypageButton>Menu</MypageButton>
        </li>
        <li>         
           <MypageButton>Menu</MypageButton>
        </li>
        <li>         
           <MypageButton>Menu</MypageButton>
        </li>
        <li>         
           <MypageButton>Menu</MypageButton>
        </li>
        <li>         
           <MypageButton>피드백</MypageButton>       
        </li>               
    
    </MypageMenubarPink>
      <MypagePurple>
      <h1>나의 행성</h1>   
         <MypageSideMenubarYellow >
            
        
        <li>         
           <MypageButton>내 행성 관리</MypageButton><p> -프로필 사진 수정</p> 
           <p>-연락처 수정</p><p>-이메일 수정</p>   
        </li>              
        <li>         
           <MypageButton>
               나의 흔적 관리
            </MypageButton><p>-작성한 글, 피드 관리</p><p>-작성한 댓글 관리</p>      
        </li>              
                     
        <li>         
           <MypageButton>탐험가 신고 센터</MypageButton><p>-문제 신고</p> 
                 
        </li>              
        <li>         
           <MypageButton>혼자 여행</MypageButton>
           <p>-블랙홀</p>       
        </li>              
        <li>         
           <MypageButton>여행객 신고</MypageButton>       
        </li>              
        </MypageSideMenubarYellow >
               
      
      </MypagePurple>

   

   </MypageWrap> 
   
</>
  )
}

export default Prac
