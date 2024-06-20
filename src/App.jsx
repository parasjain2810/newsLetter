import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home';
import Detail from './Pages/Detail';

function App() {
  return(
    <BrowserRouter>
    <Routes>
    {/* this is home Page */}
      <Route path='/' element={<Home/>}/> 
      {/* this is detail of every news */}
      <Route path='/detail' element={<Detail/>}/> 
    </Routes>
    </BrowserRouter>
  ) 
  
}

export default App;
