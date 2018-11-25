import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
        <Link to="/about">About me</Link>

    <h1>I'm Jonathan Chiou</h1>
    <p>I built this site to work on my front-end development skills.</p>
    <p>I also wanted to try out a new tech stack and work with languages, frameworks, etc.
      that I don't normally get to play with at work.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
