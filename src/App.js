import React from 'react';
import Signup from './components/Signup/Signup';
import {Routes,Route, BrowserRouter} from 'react-router-dom';

function App() {
  return(
 <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Signup/>}/>
  </Routes>
 </BrowserRouter>
  )
}

export default App;
