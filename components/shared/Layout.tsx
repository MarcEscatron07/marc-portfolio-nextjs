import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

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