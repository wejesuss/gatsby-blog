import React from 'react'
import { graphql } from "gatsby"

export default function Post({ data: { markdownRemark } }) {
    const { frontmatter, html, timeToRead } = markdownRemark

    return (
        <div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
              <h1>{frontmatter.title}</h1>
              <h4>{timeToRead} minutes</h4>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <p>Some tags:</p>
            <ul>
                {frontmatter.tags.map(tag => (
                    <li>{tag}</li>
                ))}
            </ul>
            <div>
                {frontmatter.description}
            </div>
            <img src={frontmatter.image.publicURL} alt="readme" />
        </div>
    );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
          title
          description
          image {
            publicURL
          }
          tags
        }
        fields {
            slug
        }
        html
        timeToRead
    }
  }
`