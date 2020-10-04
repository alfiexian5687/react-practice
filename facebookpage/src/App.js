import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="parent">
      <div className="container">
        <div className="info">
          <h1>
            facebook
          </h1>
          <p>
            Facebook helps you connect and share with the people in your life
          </p>
        
        </div>
        <div className="login">
            <div className="login-holder">
           
                <input className="input-holder" placeholder = "Email address and phone number"/>
                <input className="input-holder" placeholder = "Password"/>
              
                <button className="login-button">
                    Log in
                </button>

                <div>
                  <p className="link">
                    <a href="https://www.facebook.com" className="link">
                    Forgotten password?
                    </a>
                  </p>
                  <hr>
                  </hr>
                </div>
                <button className="create-button">
                    Create new account
                </button>
              
            </div>
            <p className="last">
               <b><a href="https//:www.facebppk.com" className="last-link">Create a page</a></b> for a celebrity,band or business
            </p>
        </div>
      </div>
    </div>
  );
}

export default App;
