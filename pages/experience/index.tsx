import React from 'react'

import {
  HEADER_LINKS
} from '../../variables'

function Experience() {
  return (
    <section id="experience" className="page-section">
      <h6 className="section-header">
        <span className="header-content">
          <span className="link-bullet">{HEADER_LINKS && HEADER_LINKS[1].id}</span> {HEADER_LINKS && HEADER_LINKS[1].name}
        </span>        
      </h6>
    </section>
  )
}

export default Experience