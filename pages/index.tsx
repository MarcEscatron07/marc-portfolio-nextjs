import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

import About from './about'
import Experience from './experience'
import Projects from './projects'
import Contact from './contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marc Benedict Escatron | Frontend Web Developer</title>
      </Head>
      <Layout>
        <section id="home" className="page-section pt-0">
          <h1>Marc Benedict Escatron</h1>
          <h2>&lt;Web Developer /&gt;</h2>
          <h3>A Frontend focused Web Developer specializing in single-page applications and in creating web apps with efficient & maintainable code.</h3>
        </section>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}
