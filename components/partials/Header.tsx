import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import Button from '@mui/material/Button';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HEADER_LINKS, HEADER_RESUME } from "../../variables";

function Header() {
  const router = useRouter();
  //   console.log('Header > router', router)

  const activeLinkChecker = (url: string) => {
    if (url == router.asPath) {
      return " active";
    }
    return "";
  };

  return (
    <>
      <nav className="navbar-header navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/logo-image.png"
              alt="navbar-logo"
              height={70}
              width={70}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarHeader">
            <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
              {HEADER_LINKS &&
                HEADER_LINKS.map((hlink, idx) => {
                  return (
                    <li key={idx} className="nav-item text-lg-center">
                      <Link
                        className={`nav-link${activeLinkChecker(hlink.url)}`}
                        href={hlink.url}
                      >
                        <span className="link-bullet">{hlink.id}</span>{" "}
                        {hlink.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <Button
              type="button" 
              variant="outlined" 
              color="secondary"
            >
              <Link href={HEADER_RESUME} target="_blank" style={{color: '#64ffda'}}>
                Resumé
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
