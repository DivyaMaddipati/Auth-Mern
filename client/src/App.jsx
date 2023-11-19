//import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
// import Glogin from './Glogin'
// import {gapi} from 'gapi-script';
// import {useEffect} from 'react';

// const clientId = "842523348082-nog8olqesbn8i8mutqgghdpo28g5r0pb.apps.googleusercontent.com"
function App() {
  //const [count, setCount] = useState(0)
  // useEffect(() => {
  //   function start(){
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope:"",
  //     })
  //   }

  //   gapi.load('client:auth2',start);
  // })

  return (
      <div>
       <BrowserRouter>
       <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
       </Routes>
       </BrowserRouter>
       {/* <Glogin /> */}
      </div>
  )
}

export default App;
