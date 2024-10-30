import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail,searchTickets } from "./ticketSlice"
import axios from "axios";


export const fetchAllTickets = () => async(dispatch) =>{
    dispatch(fetchTicketLoading())

    try {
        const result = await axios.get(
            'http://localhost:3001/v1/ticket/',
            {headers : {Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVAZS5jb20iLCJpYXQiOjE3MzAzMTIxMjIsImV4cCI6MTczMjA0MDEyMn0.xm3Cly2y_dB68RjLtHVzq7P7LMIM8PK35cG8cRuants'}})
            
            dispatch(fetchTicketSuccess(result.data.message))
        
        } catch (error) {
        dispatch(fetchTicketFail(error.message))
    }
}

export const filterSearchTicket = (str) => async(dispatch) =>{
    dispatch(searchTickets(str))
}