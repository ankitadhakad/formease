import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Details from './pages/Details.jsx';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
export default function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
    
      
    
   <Footer/>
    </BrowserRouter>
     
     
  )
}
