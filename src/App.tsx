import React from 'react'
import ProfileOverview from './screens/ProfileOverview'
import { CurrentUserProvider } from './hooks/useCurrentUser'
import './styles/index.css'

const App = () => {
  return (
    <div className="App">
      <CurrentUserProvider>
        <ProfileOverview />
      </CurrentUserProvider>
    </div>
  )
}

export default App
