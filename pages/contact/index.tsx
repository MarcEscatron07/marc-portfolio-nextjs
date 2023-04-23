import React from 'react'

import Form from '../../components/shared/Form'

import {
  HEADER_LINKS
} from '../../variables'

function Contact() {
  return (
    <section id="contact" className="page-section">
      <h6 className="section-header">
        <span className="header-content">
          <span className="link-bullet">{HEADER_LINKS && HEADER_LINKS[3].id}</span> {HEADER_LINKS && HEADER_LINKS[3].name}
        </span>        
      </h6>
      <div className="contact-form row mt-4">
        <Form />
      </div>
    </section>
  )
}

export default Contact