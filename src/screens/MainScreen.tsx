import React, { FC } from 'react'
import gql from 'graphql-tag'
import { RouteComponentProps } from '@reach/router'

import PageLayout from '../components/PageLayout'
import { useMainScreen_CurrentUserQuery } from '../generated/graphql'

const MainScreen = () => {
  const { data, loading, error } = useMainScreen_CurrentUserQuery()
  const currentUser = data?.currentUser
  return <PageLayout></PageLayout>
}

export default MainScreen

gql`
  query MainScreen_currentUser {
    currentUser {
      id
      name
      ...ProfileImage_user
      consecutiveStudyDays
    }
  }
`
