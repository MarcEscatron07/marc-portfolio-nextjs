import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { HEADER_LINKS } from '../../variables'

function Header() {
  const router = useRouter();
//   console.log('Header > router', router)

  const activeLinkChecker = (url: string) => {
    if(url == router.asPath) {
        return ' active';
    }
    return '';
  }

  return (
    <>        
        <nav className="navbar-header navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <Image src="/images/mbe-logo.png" height={50} width={77} alt="navbar-logo" />
                </Link>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarHeader">
                    <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
                        {HEADER_LINKS && HEADER_LINKS.map((hlink, idx) => {
                            return (
                                <li key={idx} className="nav-item text-lg-center">
                                    <Link 
                                    className={`nav-link${activeLinkChecker(hlink.url)}`} 
                                    href={hlink.url}>
                                        <span className="link-bullet">{hlink.id}</span> {hlink.name}
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