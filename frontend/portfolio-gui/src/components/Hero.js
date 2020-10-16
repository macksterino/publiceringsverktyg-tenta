import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { HeroWrapper, HeroInfo } from "../elements"
// ...GatsbyImageSharpFluid
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <HeroWrapper>
      <div className="section-center hero-center">
        <HeroInfo>
          <div>
            <div className="underline"></div>
            <h1>I'm Marcus</h1>
            <h4>Software Developer</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <SocialLinks />
          </div>
        </HeroInfo>
          <Image fluid={fluid} className="hero-img" />
      </div>
    </HeroWrapper>
  )
}

export default Hero
