import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Error</h1>
    <p>Diese Seite konnte nicht gefunden werden</p>
  </Layout>
)

export default NotFoundPage
