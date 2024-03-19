import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import './index.css'
import { Admin } from './component/Admin';
import { Login } from './component/Login';
import { Auth } from './component/Auth';
import { Protected } from './component/Protected';
import { Nomatch } from './component/Nomatch';
import { Home } from './component/Home';
import { Signup } from './component/Signup';
import { Navbar } from './component/Navbar';
import { Profile } from './component/Profile';
import { Users } from './component/Users';
import Play from './component/Play';
import { Score } from './component/Score';
function App() {
  return (
    <div className="App">
          <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/*' element={<Nomatch/>}/>        
        <Route path='/Users' element={<Users/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Protected><Admin/></Protected>}/>
        <Route path='/profile' element={<Protected><Profile/></Protected>}/>
        <Route path='/Play' element={<Protected><Play/></Protected>}/>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Score' element={<Score/>}/>

      </Routes>
      </Auth>

    
    </div>
  );
}

export default App;