import React from 'react'
import { Header } from "./partial/Header.comp";
import { Footer } from "./partial/Footer.comp";

export const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header'>
        <Header/>
        </header>

        <main className='main'>
        {children}
        </main>

        <footer className='footer'>
        <Footer/>
        </footer>
        
    </div>
  )
}
