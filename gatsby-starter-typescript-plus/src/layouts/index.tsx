import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

import ArticlesComponent from '../components/Articles'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allStrapiArticle: {
    edges: Article[]
  }
}

interface Props {
  readonly title?: string
  readonly children: React.ReactNode
}

const IndexLayout: React.FC<Props> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allStrapiArticle {
          edges {
            node {
              strapiId
              title
              category {
                name
              }
              image {
                localFile {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
          link={[
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css?family=Staatliches'
            },
            {
              rel: 'stylesheet',
              href: 'https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css'
            }
          ]}
          script={[
            {
              src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js'
            },
            {
              src: 'https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js'
            },
            {
              src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js'
            }
          ]}
        />
        {/* <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain> */}
        <ArticlesComponent articles={data.allStrapiArticle.edges} />
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
