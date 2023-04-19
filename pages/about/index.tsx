import React from 'react'

import {
  HEADER_LINKS,
  ABOUT_PARAGRAPHS
} from '../../variables'

function About() {
  return (
    <section id="about" className="page-section">
      <h5>{HEADER_LINKS[0].id}. {HEADER_LINKS[0].name}</h5>
      {ABOUT_PARAGRAPHS && ABOUT_PARAGRAPHS.map((aParagraph, idx) => {
        return (
          <p key={idx} className="about-paragraph">{aParagraph.text}</p>
        )
      })}
    </section>
  )
}

export default About