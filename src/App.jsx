import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";

import Signup from "./components/Signup";
import { useState } from "react";
import Landing from "./components/Landing";

function App() {
    const [user,setUser] = useState([
        {
            name :'john',
            pass:'123'
        }
    ])
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login user = {user}/>} />
      <Route path="/Signup" element = {<Signup user = {user} setUser = {setUser}/>}/>
      <Route path="/landing" element= {<Landing />} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
