//Router

import React from 'react'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import One from './One';
import Two from './Two';
import Three from './Three';

function Nine() {
  return (
    <div>
        <BrowserRouter>
        <nav>
            <p>All Components are here</p>
            <ul>
                <li >
                    <Link to='/'>One</Link>
                </li>
                <li >
                    <Link to='/two'>Two</Link>
                </li>
                <li >
                    <Link to='/three'>Three</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<One/>}></Route>
            <Route path='/two' element={<Two/>}></Route>
            <Route path='/three' element={<Three/>}></Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default Nine