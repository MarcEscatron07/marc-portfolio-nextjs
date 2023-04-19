import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { HEADER_LINKS } from '../variables'

function Header() {
  const [activeLink, setActiveLink] = useState<string>('');

  const activeLinkChecker = (name: string) => {
    if(name == activeLink) {
        return ' active';
    }
    return '';
  }

  const headerLinkHandler = (name: string) => {
    setActiveLink(name);
  }

  return (
    <>        
        <nav className="navbar-header navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" href="/" onClick={() => headerLinkHandler('')}>
                    <Image src="/images/mbe-logo.png" height={50} width={77} alt="navbar-logo" />
                </Link>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarHeader">
                    <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
                        {HEADER_LINKS && HEADER_LINKS.map((hLink, idx) => {
                            return (
                                <li key={idx} className="nav-item text-lg-center">
                                    <Link 
                                    className={`nav-link${activeLinkChecker(hLink.name)}`} 
                                    href={hLink.url}
                                    onClick={() => headerLinkHandler(hLink.name)}>
                                        <span className="nav-bullet">{hLink.order}.</span> {hLink.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <button className="btn-outline">Resumé</button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header