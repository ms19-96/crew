import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
