import React from 'react'
import './Facebook.css'
 

export default function Facebook() {
  function newacc(){
    document.write("Welcome to Facebook, Your account is created");
  }
  function forgot(){
    document.write("Enter your mail/phone number");
  }
  function login(){
    document.write("Your account is succesfully login.");
  }
  return (
    <div class="container-fluid">
       <div class="row main">
        <div class="col-6 column1">
          <img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-500x281.png' alt="logo" width="300px"></img>
          <div>
            <p class="para">
                Facebook helps you connect and share<br />with people in your life.
            </p>
          </div>
        </div>
        <div class="col-6">
           <div class="forms column2">
              <form>
                <input type="mail" placeholder="Email address or phone number" class="inp" required></input><br /><br />
                <input type="password" placeholder="Password" class="inp" required></input><br /><br />
              </form>
              <button class="btncss" onClick={login}>Log in</button> <br /><br />
              <a href="#" onClick={forgot} class="hlink">Forgotten password?</a><br /><br />
              <hr/>
              <button class="btn2" onClick={newacc}>Create new Account</button>
           </div>
           <br/>
           <center class="center">
            <p>
                <b>create a page</b> for a celebrity, brand or business.
            </p>
           </center>
        </div>
       </div>
    </div>
  )
}
