import React from 'react'
import Head from 'next/head'
import Layout from '../components/shared/Layout'

import About from './about'
import Experience from './experience'
import Projects from './projects'
import Contact from './contact'

import {
  HOME_HEADERS
} from '../variables'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marc Benedict Escatron | Web Developer</title>
      </Head>
      <Layout>
        <section id="home" className="page-section">
          <div className="container">
            <h1 className="home-header">{HOME_HEADERS[0].text}</h1>
            <h2 className="home-header">
              <span className="theme-link">&lt;&gt;</span>
              <strong>{HOME_HEADERS[1].text}</strong>
              <span className="theme-link">&lt;/&gt;</span>
            </h2>
            <h3 className="home-header">{HOME_HEADERS[2].text}</h3>
          </div>
        </section>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}
