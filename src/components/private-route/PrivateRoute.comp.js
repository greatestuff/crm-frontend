import React, {useEffect} from 'react'
import {Route,Navigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { loginSuccess } from '../login/loginSlice'

export const PrivateRoute = ({children,...rest}) => {

  const dispatch = useDispatch()
  const {isAuth} = useSelector(state => state.login)
  
  console.log(isAuth)

  useEffect(() => {
    sessionStorage.getItem("accessJWT") && dispatch(loginSuccess())
  }, [dispatch])
  

  return isAuth ? children : <Navigate to="/" />
}
