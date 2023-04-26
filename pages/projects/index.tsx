import React from 'react'

import Application from '../../components/shared/Application'

import {
  HEADER_LINKS
} from '../../variables'

function Projects() {
  return (
    <section id="projects" className="page-section">
      <div className="container">
        <h6 className="section-header">
          <span className="header-content">
            <span className="link-bullet">{HEADER_LINKS && HEADER_LINKS[2].id}</span> {HEADER_LINKS && HEADER_LINKS[2].name}
          </span>        
        </h6>
        <div className="projects-application row mt-4">
          <Application />
        </div>
      </div>
    </section>
  )
}

export default Projects