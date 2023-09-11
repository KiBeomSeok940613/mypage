import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Globalstyle from '../component/Globalstyle'


const MypageMenubar = styled.nav`
  width: 1300px;
  height: 100px;
  margin: auto;
  display: flex; justify-content: space-around; align-items: center;
  background-color: hotpink;
`
const MypageSideMenubar = styled.div`
background-color: yellow;
width: 200px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
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

function Prac() {
  return (
  
    <>

      <MypageMenubar>
       
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
    
    </MypageMenubar>

    <MypageSideMenubar>
        
        <li>         
           <MypageButton>내 행성 관리</MypageButton><p> -프로필 사진 수정</p> 
           <p>-연락처 수정</p><p>-이메일 수정</p><p>-알람 설정</p>     
        </li>              
        <li>         
           <MypageButton>
               내가 작성한 게시글 관리
            </MypageButton><p>-작성한 글 관리</p><p>-작성한 피드 관리</p><p>-작성한 댓글 관리</p>      
        </li>              
                     
        <li>         
           <MypageButton>탐험가 신고 센터</MypageButton><p> -글 신고</p> 
           <p>-피드 신고</p><p>-댓글 신고</p><p>-버그 신고 </p>       
        </li>              
        <li>         
           <MypageButton>혼자 여행</MypageButton>
           <p>-블랙홀</p>       
        </li>              
        <li>         
           <MypageButton>여행객 신고</MypageButton>       
        </li>              

    </MypageSideMenubar>
  
   
    </>
  )
}

export default Prac
