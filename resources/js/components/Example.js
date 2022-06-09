import React, { useState ,useEffect} from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  browserHistory     
} from "react-router-dom";
import Home from './Home';
import TextToSpeach from "./TextToSpeach";
function Example() {
    


    return (
        <Router>
        <br/><br/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header"><b>Laravel React Text To Speach</b></div>

                        <div className="card-body">
                              

        <br/>
        <center>
        <Link to="/">Home page</Link>&nbsp;&nbsp;<Link to="/text-to-speach">Text to speach</Link>
        <br/>
        </center>
        
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<TextToSpeach/>} path="/text-to-speach" />
        </Routes>
        </Router>        
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
