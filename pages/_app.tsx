import React, { useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

const theme = createTheme({
  palette: {
    primary: {
      light: '#414f64',
      main: '#12233e',
      dark: '#0c182b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#83ffe1',
      main: '#64ffda',
      dark: '#46b298',
      contrastText: '#000',
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
