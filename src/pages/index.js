import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'

//TODO make element/component for Hero image

const IndexPage = () => (
  <Layout>
    <h1>Hello!</h1>
    
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    
    <p>My name is Jonathan Chiou.</p>
    <p>I'm building this site to improve my front-end development skills.</p>
    <p>I also wanted to learn the <a href="https://jamstack.org/">JAM Stack</a> and experiment with things that I don't get to play with at work.</p>
    
    <p>This site proudly is made with <a href="https://www.gatsbyjs.com">Gatsby!</a></p>
  </Layout>
)

export default IndexPage
