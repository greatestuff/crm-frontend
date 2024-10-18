import React from "react"
import './App.css';
import { Entry } from "./page/entry/Entry.page"
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./page/dashboard/Dashboard.page";
import { AddTicket } from "./page/new-ticket/AddTicket.page";
import { TicketLists } from "./page/ticket-listing/TicketLists.page";
import { Ticket } from "./page/ticket/Ticket.page";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route exact path="/" element={<Entry />} />
            </Routes>

          <DefaultLayout>

            <Routes>
              <Route exact path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} > </Route>
              <Route exact path="/add-ticket" element={<PrivateRoute><AddTicket /></PrivateRoute>} > </Route>
              <Route exact path="/tickets" element={<PrivateRoute><TicketLists /></PrivateRoute>} > </Route>
              <Route exact path="/ticket/:tId" element={<PrivateRoute><Ticket /></PrivateRoute>} > </Route>
            </Routes>
          </DefaultLayout> 

        
        
      </Router>
    </div>
  );
}

export default App;
