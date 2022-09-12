import React from "react";
import  AllCards from './components/AllCards';
import SingleCard from './components/SingleCard';
import { Routes, Route } from 'react-router-dom';

function App(){

    return(
        
       <div id='main'>
            <div className='column container'>
                <div id='header'>
                    <h1>Emotion Flashcards</h1>
                    
                </div>
            </div>

            <Routes>
                <Route path='/cards' element={<AllCards/>}/>
                {/* <Route path='/campuses' element={<AllCampuses/>}/>
                <Route path='/students/:studentId/' element={<SingleStudent/>}/> */}
                <Route path='/cards/:cardId/' element={<SingleCard/>}/>
                <Route path='/' element={<AllCards/>}/>
            </Routes>
       </div>
       
    )
}

export default App;