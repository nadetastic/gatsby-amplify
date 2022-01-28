import { graphql } from "gatsby"
import React from "react"
import Layout from "../layout";

export default function Home({data}) {
  // console.log(data)
  return (
    <Layout>
      <h1>Hello world! - {data.site.siteMetadata.title}</h1>
      <p>This is the first Gatsby page.</p>
    </Layout>
  )
}


export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`