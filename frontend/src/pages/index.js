import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "bootstrap/dist/css/bootstrap.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"

import smoothScrollPolyfill from "smoothscroll-polyfill"

smoothScrollPolyfill.polyfill()

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
