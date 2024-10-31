import { configureStore } from '@reduxjs/toolkit'
import  ticketsReducer  from "./page/ticket-listing/ticketSlice";
import  loginReducer  from "./components/login/loginSlice";
import  userReducer  from "./page/dashboard/userSlice";


const store = configureStore({ reducer: {
    user : userReducer,
    tickets : ticketsReducer,
    login : loginReducer
} })

export default store;