/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css
} from 'styled-components'
import colors from './colors'

export const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    (accumulator)[size] = (a, b, c) => css`
      @media (max-width: ${(MEDIA_WIDTHS)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
)
const input = {
  input_small: '380px',
  input_medium: '512px',
  input_large: '810px'
}

const theme = () => ({
  ...colors,
  grids: {
    sx: 8,
    sm: 16,
    md: 24,
    lg: 32
  },
  // font size for text
  size_20: '20px',
  size_16: '16px',
  size_17: '17px',
  size_18: '18px',
  size_14: '14px',
  size_13: '13px',
  size_12: '12px',

  ...input,
  // media queries
  mediaWidth: mediaWidthTemplates
})

export default function ThemeProvider({ children }) {
  return <StyledComponentsThemeProvider theme={theme()}>{children}</StyledComponentsThemeProvider>
}

export const ThemedGlobalStyle = createGlobalStyle`
html, body {
  width: 100%;
  height: 100%;
}

body {
  min-height: 100vh;
  height: 100%;
  margin: 0;
  padding: 0;
  #root {
    width: 100%;
    //height: 100%;
  }
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border: solid 1px ${({ theme }) => theme.text_primary};
  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: solid 1px ${({ theme }) => theme.text_primary};
  }
  .ant-select-dropdown {
    border: solid 1px ${({ theme }) => theme.text_primary};
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.125);
    border-radius: 4px;
  }
  
}
`
