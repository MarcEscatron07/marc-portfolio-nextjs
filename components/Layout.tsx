import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout(props: any) {
  return (
    <>
        <Header />
        <main className="container main-container">
            {props.children}
        </main>
        <Footer />
    </>
  )
}

export default Layout