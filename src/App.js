import React, {useState} from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ChatPanel from './ChatPanel';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { initialState } from './reducer';

function App() {

  const [ user = initialState.user, dispatch] = useStateValue();
 

  return (
    <div className="App">
      {
        !user ? (<Login/>) : (
          <div className='app__body'>
              <BrowserRouter>
                <Sidebar/>
                <Routes>
                  <Route exact path="/rooms/:roomId" element={<Chat/>}/>
                  <Route exact path="/" element={<Chat/>} />  
                </Routes>
              </BrowserRouter>
          </div>

        )
        } 
    </div>
  );
}

export default App;
