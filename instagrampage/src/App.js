import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  } from "module";

function App() {
  return (
    <div className="parent">
        <div className="container">

            <div className="info">
              <img className="phone" src={require('./image.png')}></img>
            </div>

            <div className="login">
              <div className="login_holder">
                  <h1>
                    Instagram
                  </h1>

                <input className="input_holder" placeholder = "Phone number, username or email"/>
                <input className="input_holder" placeholder = "Password"/>
                
                <button className="login_button">
                  Log in
                </button>

                <p className="or"><span> OR </span></p>

                <p className="first_link">
                  <a href="https://www.facebook.com" className="first_link">
                    Log in with Facebook
                  </a>
                </p>

                <div>
                  <p className="forgot_password">
                    <a href="https://www.instagram.com" className="forgot_password">
                      Forgot password?
                    </a>
                  </p>
                </div>
              </div>

              
              <div className="sign_up">
                <p className="acc">Don't have an account? <a className="last" href="https://www.instagram.com">Sign up</a></p>
              </div>

              <p className="get_the_app">Get the app </p>

              <div className="install">
                <div className="appstore">
                  <img src={require('./appstore.png')}></img>
                </div>
                <div className="googleplay">
                <img src={require('./googleplay.png')}></img>
                </div>
              </div>
            
            </div>

      
        </div>

    </div>
  
  );
}

export default App;
