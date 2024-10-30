import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tickets: [],
    isLoading : false,
    error: '',
    searchTicketList: []
}

const ticketListSlice = createSlice({
    name:"ticketList",
    initialState,
    reducers : {
        fetchTicketLoading : (state, action) =>{
            state.isLoading = true;
        },
        fetchTicketSuccess : (state, action) =>{
            state.isLoading = false;
            state.tickets = action.payload
            state.searchTicketList = action.payload
        } ,
        fetchTicketFail : (state, {payload}) =>{
            state.isLoading = false;
            state.error = payload
        } ,
        searchTickets : (state, {payload}) =>{
            state.searchTicketList = state.tickets.filter((row) => {
                if(!payload) return row
                return row.subject.toLowerCase().includes(payload.toLowerCase())
            })
        } 
    }
})

const { reducer, actions } = ticketListSlice
export const {
    fetchTicketLoading, 
    fetchTicketSuccess, 
    fetchTicketFail,
    searchTickets
    } = actions


export default reducer