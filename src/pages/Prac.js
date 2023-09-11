import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Globalstyle from '../component/Globalstyle'


const BodyWrap= styled.body`
width: 100%;
height: 100%;
background-color: black;
`
const MypageMenubar = styled.nav`
  width: 1300px;
  height: 100px;
  margin: auto;
  display: flex; justify-content: space-around; align-items: center;
  background-color: hotpink;
`
const MypageSideMenubar = styled.div`
background-color: red;
width: 200px;
height: 100%;

`

const MypageButton= styled.div`

width: 80px; height: 30px; background-color: #fff; 
border: 1px solid red; display: flex; justify-content: center;
border-radius: 5px;

li{
  
}
`

function Prac() {
  return (
  
    <>
    <BodyWrap>

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
           <MypageButton>Menu</MypageButton>       
        </li>               
    
    </MypageMenubar>

    <MypageSideMenubar>
        
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
           <MypageButton>Menu</MypageButton>       
        </li>              
        <li>         
           <MypageButton>Menu</MypageButton>       
        </li>              

    </MypageSideMenubar>
  
  </BodyWrap>
    



   
    </>
  )
}

export default Prac
