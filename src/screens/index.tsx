import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProfileOverview from './ProfileOverview'
import Profiles from './profiles'
import Profile from './profile'
import AddContent from './add-content'
import FollowList from '../components/follow-list'

export default function Screens() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProfileOverview} />
        <Route path="/profile" exact component={Profiles} />
        <Route path="/:id" exact component={Profile} />
        <Route path="/add" component={AddContent} />
        <Route path="/user/:userid/:target" component={FollowList} />
      </Switch>
    </Router>
  )
}
