import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

import {MDXProvider} from '@mdx-js/react'
import {YouTube} from '@blocks/kit'

import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        publicURL
      }
      childStrapiArticleContent {
        childMdx {
          body
        }
      }
    }
  }
`

const shortcodes = {YouTube}

const Article = ({ data }) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <div>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{article.childStrapiArticleContent.childMdx.body}</MDXRenderer>
        </MDXProvider>        
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>

        
  {/* <MDXProvider components={shortcodes}>{article.content}</MDXProvider> */}

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={article.content} />
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article