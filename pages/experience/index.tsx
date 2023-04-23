import React from 'react'

import Timeline from '../../components/shared/Timeline'

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
      <div className="experience-timeline row mt-4">
        <Timeline />
      </div>
    </section>
  )
}

export default Experience