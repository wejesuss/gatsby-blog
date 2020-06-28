import React from "react"
import { graphql } from 'gatsby'

export default function Home({ data: { allMarkdownRemark } }) {
  const { nodes } = allMarkdownRemark

  return (
    <>
      <div>Hello world!</div>
      <div>
        <ul>
          {nodes.map(node => (
            <a key={node.id} href={`http://localhost:8000${node.fields.slug}`}>
              <li>{node.fields.slug.replace(/[/\\]/g, "")}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
        id
      }
    }
  }
`