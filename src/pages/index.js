import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import KeyframesTest from '../components/keyframesTest.js'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <KeyframesTest/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
