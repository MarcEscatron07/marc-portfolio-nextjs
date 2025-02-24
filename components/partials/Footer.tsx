import React from 'react'
import Link from 'next/link';

function Footer() {
  return (
    <>
        <footer className="navbar-footer">
            <p className="navbar-credit">&copy; 2023 Marc Benedict Escatron. 
            Built with <span><Link className="theme-link" href="https://nextjs.org/" target="_blank">NEXT.JS</Link></span>.</p>
        </footer>
    </>    
  )
}

export default Footer