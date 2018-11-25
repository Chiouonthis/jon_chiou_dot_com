import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
        <Link to="/">Home</Link>

    <h1>About me</h1>
    <ul>
        <li>Alumnus of the Software Guild in Akron, Ohio</li>
        <li>Obtained a B.A. in English and Communication from Lake Forest College in Lake Forest, IL</li>
        <li>Currently based in Northeast Ohio</li>
        <li>Happily married with two kids :)</li>
    </ul>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
