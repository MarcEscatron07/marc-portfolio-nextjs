import React from 'react'

import {
  HEADER_LINKS,
  ABOUT_PARAGRAPHS
} from '../../variables'

function About() {
  return (
    <section id="about" className="page-section">
      <h5 className="section-header">{HEADER_LINKS[0].id}. {HEADER_LINKS[0].name}</h5>
      {ABOUT_PARAGRAPHS && ABOUT_PARAGRAPHS.map((aparg, idx) => {
        return (
          <p key={idx} className={`about-paragraph${['p3'].includes(aparg.id) ? ' mt-5' : ' my-2'}`}>
            {aparg.text}
          </p>
        )
      })}
    </section>
  )
}

export default About