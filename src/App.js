
import {  BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Counter from './pages/Counter';
import Prac from './pages/Prac';
import styled, { createGlobalStyle } from 'styled-components';
import Globalstyle from './component/Globalstyle';




function App() {
  return (
   
  
    <>
  
     <Globalstyle />
      
      <nav>
          <ul>
            <li>
              <NavLink to="/">counter</NavLink>
            </li>
          </ul>
        
      </nav>
      
      
      
      
      
      
      <Routes>
      
        <Route path="/main" element={<Main/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/prac" element={<Prac/>}/>
      </Routes>
  
    </>
   
   
   
    
  );
}

export default App;
