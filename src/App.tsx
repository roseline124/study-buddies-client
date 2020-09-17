import React from 'react'
import { SnackbarProvider } from 'notistack'
import ProfileOverview from './screens/ProfileOverview'
import { CurrentUserProvider } from './hooks/useCurrentUser'
import './styles/index.css'

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <CurrentUserProvider>
          <ProfileOverview />
        </CurrentUserProvider>
      </div>
    </SnackbarProvider>
  )
}

export default App
