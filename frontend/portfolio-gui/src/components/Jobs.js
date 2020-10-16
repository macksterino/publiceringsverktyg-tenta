import React from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { JobsCenter, JobsButtonContainer, JobsInfo, JobsDate, JobsDesc } from "../elements"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <JobsCenter>
        <JobsButtonContainer>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={(() => setValue(index))}
                className={`job-btn ${index === value &&
                  'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </JobsButtonContainer>
        <JobsInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <JobsDate>{date}</JobsDate>
          {
            desc.map((item) => {
              return (
                <JobsDesc key={item.id}>
                  <FaAngleDoubleRight />
                  <p>{item.name}</p>
                </JobsDesc>
              )
            })
          }
        </JobsInfo>
      </JobsCenter>
      <Link to="/about" className="btn center-btn">
        more info
    </Link>
    </section>
  )
}

export default Jobs
