import React from 'react'

import {
  HEADER_LINKS
} from '../../variables'

function Projects() {
  return (
    <section id="projects" className="page-section">
      <h6 className="section-header">
        <span className="header-content">
          <span className="link-bullet">{HEADER_LINKS && HEADER_LINKS[2].id}</span> {HEADER_LINKS && HEADER_LINKS[2].name}
        </span>        
      </h6>
    </section>
  )
}

export default Projects