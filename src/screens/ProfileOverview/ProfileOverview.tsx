import React from 'react'
import gql from 'graphql-tag'

import PageLayout from '../components/PageLayout'
// import { useProfileOverview_CurrentUserQuery } from '../generated/graphql'

const ProfileOverview = () => {
  // const { data, loading, error } = useProfileOverview_CurrentUserQuery()
  // const currentUser = data?.currentUser
  return <PageLayout></PageLayout>
}

export default ProfileOverview

gql`
  query ProfileOverview_currentUser {
    currentUser {
      id
      name
      ...ProfileImage_user
      consecutiveStudyDays
    }
  }
`
