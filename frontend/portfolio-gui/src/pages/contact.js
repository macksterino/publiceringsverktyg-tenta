import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ContactWrapper } from "../elements"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Feel free to contact me via this form" />
      <ContactWrapper>
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xpzopjrv" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </ContactWrapper>
    </Layout>
  )
}

export default contact
