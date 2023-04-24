import React from 'react'
import Link from "next/link";
import Image from 'next/image'

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  PROJECTS_APPLICATION
} from '../../variables'

function Application() {
  return (
    <>
      {PROJECTS_APPLICATION && PROJECTS_APPLICATION.map((app, idx) => {
        return (
          <div key={idx} className="col-md-4 p-4">
            <div className="card">
              <Link className="card-link" href={app.url} target="_blank">
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
                <h6 className="card-title">Technologies Applied:</h6>
                <div className="row">
                  {app.technologies && app.technologies.map((t, tIdx) => {
                    return (
                      <div key={tIdx} className="col-md-4">
                        <i className="application-icon">{t.icon}</i> {t.name}
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