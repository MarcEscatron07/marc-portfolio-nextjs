import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { NAV_LINKS } from '../variables'

function Header() {
  const [activeLink, setActiveLink] = useState<string>('');

  const activeLinkChecker = (name: string) => {
    if(name == activeLink) {
        return ' active';
    }
    return '';
  }

  const navLinkHandler = (name: string) => {
    setActiveLink(name);
  }

  return (
    <>        
        <nav className="navbar-header navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" href="/" onClick={() => navLinkHandler('')}>
                    <Image src="/images/nav-logo.png" height={100} width={100} alt="navbar-logo" />
                </Link>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarHeader">
                    <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
                        {NAV_LINKS && NAV_LINKS.map((navlink, idx) => {
                            return (
                                <li key={idx} className="nav-item text-lg-center">
                                    <Link 
                                    className={`nav-link${activeLinkChecker(navlink.name)}`} 
                                    href={navlink.link}
                                    onClick={() => navLinkHandler(navlink.name)}>
                                        <span className="nav-bullet">0{++idx}.</span> {navlink.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <button className="btn-outline">Resume</button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header