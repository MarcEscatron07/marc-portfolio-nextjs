import React from 'react'

import Skills from '../../components/shared/Skills'

import {
  HEADER_LINKS,
  ABOUT_PARAGRAPHS
} from '../../variables'

function About() {
  return (
    <section id="about" className="page-section">
      <div className="container">
        <h6 className="section-header">
          <span className="header-content">
            <span className="link-bullet">{HEADER_LINKS && HEADER_LINKS[0].id}</span> {HEADER_LINKS && HEADER_LINKS[0].name}
          </span>
        </h6>
        <div className="about-paragraph row mt-4">
          {ABOUT_PARAGRAPHS && ABOUT_PARAGRAPHS.map((aparg, idx) => {
            return (
              <p key={idx} className={`${['p3'].includes(aparg.id) ? ' mt-4' : ' my-2'}`}>
                {aparg.text}
              </p>
            )
          })}
        </div>
        <div className="about-skills row mt-4">
          <Skills />
        </div>        
      </div>
    </section>
  )
}

export default About