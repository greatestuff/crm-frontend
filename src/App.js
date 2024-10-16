import React from "react"
import './App.css';
import { Entry } from "./page/entry/Entry.page"
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      {/*<Entry />*/}
      <DefaultLayout>
        //DashBoard
      </DefaultLayout>
    </div>
  );
}

export default App;
