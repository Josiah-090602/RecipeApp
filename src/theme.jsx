import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#144272',
      dark: '#0A2647',
    },
    secondary: {
      main: '#9e9e9e',
      dark: '#f5f5f5',
    },
    warning: {
      dark: 'rgb(241, 176, 35)',
      light: 'rgb(253, 190, 52, 0.5)',
      main: '#FFC436',
    },
  },
  typography: { fontFamily: ['Poppins', 'sans-serif'].join(',') },
})

export default theme
