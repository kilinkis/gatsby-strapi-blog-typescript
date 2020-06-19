import { FluidObject } from 'gatsby-image'

interface CSSModule {
  [className: string]: string
}

interface Article {
  node: {
    id: number
    strapiId: string
    image: {
      publicURL: string
      url: string
      absolutePath: string
      childImageSharp: {
        fixed: FixedObject
      }
      localFile: {
        url: string
        childImageSharp: {
          fixed: FixedObject
          fluid: FluidObject
        }
      }
    }
    category: {
      name: string
    }
    title: string
    content: string
  }
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}
