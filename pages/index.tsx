import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

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
        <title>Marc Benedict Escatron | Frontend Web Developer</title>
      </Head>
      <Layout>
        <section id="home" className="page-section pt-0">
          <h1>{HOME_HEADERS[0].text}</h1>
          <h2>&lt;{HOME_HEADERS[1].text}/&gt;</h2>
          <h3>{HOME_HEADERS[2].text}</h3>
        </section>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}
