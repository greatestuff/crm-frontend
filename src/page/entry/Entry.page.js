import React, { useState } from "react"
import "./Entry.style.css"
import { LoginForm } from '../../components/login/Login.comp'
import { PasswordResetForm } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [frmLoad, setFrmLoad] = useState('Login');

  const handleOnChange = (e) => 
      {
          const {name, value} = e.target

          switch(name)
          {
            case "email" : 
              setEmail(value)
              break;
            case "password" : 
              setPassword(value)
              break;
          }
          
      }

  const handleOnLoginSubmit = (e) =>
  {
    e.preventDefault();
    if(!email || !password)
    {
      return alert("Please fill up all the Form !!")
    }

    //TODO : Submit info to server
    console.log(email,password);

  }

  const handleOnResetSubmit = (e) =>
    {
      e.preventDefault();
      if(!email)
      {
        return alert("Please fill up the e-mail !!")
      }
  
      //TODO : Submit reset request to server
      console.log(email,password);
  
    }

  const formSwitcher = (frmType) => { setFrmLoad(frmType) }

  return (
    <div className="entry-page bg-info">
      <div className="bg-light p-5 form-box">

        {
        frmLoad === "Login" && <LoginForm 
        handleOnChange={handleOnChange}
        handleOnLoginSubmit={handleOnLoginSubmit}
        formSwitcher = {formSwitcher}
        email={email}
        password={password}
        />
        }
        


        {
        frmLoad === "Reset" && <PasswordResetForm 
        handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher = {formSwitcher}
        email={email}
        />
        }


      </div>
    </div>
    
  )
}
