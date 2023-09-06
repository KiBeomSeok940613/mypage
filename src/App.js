
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Counter from './pages/Counter';
 


function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/counter" element={<Counter/>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
