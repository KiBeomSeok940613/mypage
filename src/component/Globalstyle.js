import React from 'react'
import { createGlobalStyle } from 'styled-components'



const Globalstyle = createGlobalStyle`
    
    *{
        box-sizing: border-box;
    }
    html,body
    { width: 100%; background-color: silver;}
    
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl,   ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 12px;
        vertical-align: baseline;
    }
    body{
      
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
       
        
    }
    ol, ul, li{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default Globalstyle
