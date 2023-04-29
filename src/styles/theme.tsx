import type React from 'react'

import { ThemeProvider } from 'styled-components'

import theme from '../themes/default'
import GlobalStyles from './global'
interface Props {
  children: React.ReactNode
}

const Theme = ({ children }: Props): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Theme
