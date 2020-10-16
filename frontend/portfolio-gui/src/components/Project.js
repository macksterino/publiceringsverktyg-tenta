import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { ProjectWrapper, ProjectInfo } from "../elements"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <ProjectWrapper>
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <ProjectInfo>
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">
          {description}
        </p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </ProjectInfo>
    </ProjectWrapper>
  )
}

Project.propTypes = {}

export default Project
