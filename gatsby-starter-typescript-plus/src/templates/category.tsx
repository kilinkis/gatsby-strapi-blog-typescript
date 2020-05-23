import React from 'react'
import { graphql } from 'gatsby'

import ArticlesComponent from '../components/articles'

interface CategoryProps {
  data: {
    articles: {
      edges: Article[]
    }
    category: {
      name: string
    }
  }
}

export const query = graphql`
  query Category($id: Int!) {
    articles: allStrapiArticle(filter: { category: { id: { eq: $id } } }) {
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
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`

const Category: React.FC<CategoryProps> = ({ data }) => {
  const articles = data.articles.edges
  const category = data.category.name

  return (
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1>{category}</h1>
        <ArticlesComponent articles={articles} />
      </div>
    </div>
  )
}

export default Category
