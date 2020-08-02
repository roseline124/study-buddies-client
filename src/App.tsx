import React from 'react'
import Screens from './screens'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './styles/theme'
const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Screens />
      </ThemeProvider>
    </div>
  )
}

export default App
