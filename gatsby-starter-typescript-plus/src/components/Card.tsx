import React from 'react'
import { Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

interface ArticleProps {
  article: Article
}

const Card: React.FC<ArticleProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.node.strapiId}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          {/* <Img fixed={article.node.image.childImageSharp.fixed} /> */}
          {/* <img src={article.node.image.publicURL} alt={article.node.image.publicURL} height="100" /> */}
          {/* <img src={article.node.image.localFile.url} height="100" /> */}
          <Img fluid={article.node.image.localFile.childImageSharp.fluid} />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
