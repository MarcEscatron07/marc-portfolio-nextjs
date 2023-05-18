import React from 'react'
import Link from "next/link";
import Image from 'next/image'

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquareGitlab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  PROJECTS_APPLICATION
} from '../../variables'

function Application() {
  return (
    <>
      {PROJECTS_APPLICATION && PROJECTS_APPLICATION.map((app, idx) => {
        return (
          <div key={idx} className="col-lg-4 p-4">
            <div className="card h-100">
              <Link className="card-repo" href={app.repo} title="GitLab Link" target="_blank">
                <FontAwesomeIcon icon={faSquareGitlab} />
              </Link>
              <Link className="card-link" href={app.url} title="Project Link" target="_blank">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <div className="card-header">
                <Image className="application-logo" src={app.logo} alt={app.id} height={80} width={80} />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                    {app.title}
                </h5>
                <p className="card-text">{app.text}</p>
              </div>
              <div className="card-footer">
                <div className="row">
                  {app.technologies && app.technologies.map((t, tIdx) => {
                    return (
                      <div key={tIdx} className="col-sm-6 col-xl-4 my-1">
                        <div className="row d-flex align-items-center">
                          <div className="col-3 p-0"><i className="application-icon">{t.icon}</i></div>
                          <div className="col-9 p-0"><span className="icon-text">{t.name}</span></div>
                        </div>                         
                      </div>
                    )
                  })}
                </div>
              </div>              
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Application