import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import { ErrorWrapper } from "../elements"

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="Content could not be found" />
      <ErrorWrapper>
        <div className="error-container">
          <h1>error 404</h1>
          <h2>it's a dead end</h2>
          <Link to="/" className="btn">
            back home
        </Link>
        </div>
      </ErrorWrapper>
    </Layout>
  )
}

export default Error
