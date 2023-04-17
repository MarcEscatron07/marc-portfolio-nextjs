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
          Home
        </section>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}
