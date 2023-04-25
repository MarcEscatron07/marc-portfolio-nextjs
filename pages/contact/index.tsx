import React from 'react'

import {
  HEADER_LINKS,
  CONTACT_HEADER
} from '../../variables'

function Contact() {
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    console.log('Contact > onFormSubmit event', e)
  }

  return (
    <section id="contact" className="page-section">
      <h6 className="section-header">
        <span className="header-content">
          <span className="link-bullet">{HEADER_LINKS && HEADER_LINKS[3].id}</span> {HEADER_LINKS && HEADER_LINKS[3].name}
        </span>        
      </h6>
      <form className="contact-form row mt-4 py-4" onSubmit={onFormSubmit}>
        <div className="col-lg-12 pb-2 px-4">
          <div className="row theme-container">
            <div className="col-12 my-2">
              <p className="contact-header">{CONTACT_HEADER}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 py-2 px-4">
          <div className="row theme-container">
            <div className="col-12 my-3">
              <label htmlFor="contact_name" className="form-label">Name:</label>
              <input type="text" id="contact_name" name="contact_name" className="form-control" required />
            </div>
            <div className="col-12 my-3">
              <label htmlFor="contact_email" className="form-label">Email:</label>
              <input type="email" id="contact_email" name="contact_email" className="form-control" required />
            </div>
          </div>
        </div>
        <div className="col-lg-7 py-2 px-4">
          <div className="row theme-container">
              <div className="col-12 my-3">
                <label htmlFor="contact_message" className="form-label">Message:</label>
                <textarea id="contact_email" name="contact_message" className="form-control" required></textarea>
              </div>
              <div className="col-12 my-3 d-flex justify-content-end">
                <button type="submit" className="btn-outline">Send</button>
              </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contact