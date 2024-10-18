import React from 'react'
import {Route,Navigate} from "react-router-dom"

const isAuth = true;
export const PrivateRoute = ({children,...rest}) => {
  return isAuth ? children : <Navigate to="/" />
}
