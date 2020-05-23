import React from 'react'
import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

import ReactMarkdown from 'react-markdown'

// import {MDXProvider} from '@mdx-js/react'
// import {YouTube} from '@blocks/kit'

interface ArticleProps {
  data: {
    strapiArticle: {
      image: {
        localFile: {
          url: string
          childImageSharp: {
            fixed: FixedObject
          }
        }
      }
      title: string
      content: string
    }
  }
}

//const shortcodes = {YouTube}

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        localFile {
          url
          childImageSharp {
            fixed(width: 660) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const Article: React.FC<ArticleProps> = ({ data }) => {
  const article = data.strapiArticle
  return (
    <div>
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={article.image.localFile.url}
        data-srcset={article.image.localFile.url}
        data-uk-img
      >
        <h1>{article.title}</h1>
      </div>

      {/* <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={article.content} />
        </div>
      </div> */}

      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={article.content} />
        </div>
      </div>
      <div className="uk-section">
        <Img fixed={article.image.localFile.childImageSharp.fixed} />
        {/* <img src={article.image.localFile.url} height="600" /> */}
      </div>
    </div>
  )
}

export default Article
