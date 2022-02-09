import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const { title } = data.contentfulBlogPost

  return (
    <layout>
      <h1>{title}</h1>
    </layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
    }
  }
`
