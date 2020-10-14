import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="Content could not be found" />
    <main className="error-page">
      <div className="error-container">
        <h1>error 404</h1>
        <h3>Could not find what you were looking for..</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </main>
    </Layout>
  )
}

export default Error
