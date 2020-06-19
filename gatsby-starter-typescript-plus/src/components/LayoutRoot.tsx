import * as React from 'react'
import Seo from './Seo'
import Header from './Header'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import normalize from '../styles/normalize'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Seo />
    <Global styles={() => css(normalize)} />
    <Header />
    <main>{children}</main>
  </>
)

export default LayoutRoot
