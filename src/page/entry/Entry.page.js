import React, { useState } from "react"
import "./Entry.style.css"
import { LoginForm } from '../../components/login/Login.comp'
import { PasswordResetForm } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  
  const [frmLoad, setFrmLoad] = useState('Login');

  const handleOnResetSubmit = (e) =>
    {
      e.preventDefault();
    }

  const formSwitcher = (frmType) => { setFrmLoad(frmType) }

  return (
    <div className="entry-page bg-info">
      <div className="bg-light p-5 form-box">

        {
        frmLoad === "Login" && <LoginForm 
        formSwitcher = {formSwitcher}
        />
        }
        


        {
        frmLoad === "Reset" && <PasswordResetForm 
        //handleOnChange={handleOnChange}
        //handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher = {formSwitcher}
        //email={email}
        />
        }


      </div>
    </div>
    
  )
}
