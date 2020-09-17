import React, { createContext } from 'react'
import gql from 'graphql-tag'
import { useCurrentUserQuery, CurrentUserFragment } from '../generated/graphql'

export interface CurrentUserType {
  currentUser: CurrentUserFragment | null
}

export const CurrentUserContext = createContext<CurrentUserType>({
  currentUser: null,
})

const CurrentUserProvider = ({ children }: any) => {
  const { data } = useCurrentUserQuery()

  return (
    <CurrentUserContext.Provider value={{ currentUser: data?.currentUser || null }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserProvider

gql`
  fragment CurrentUser on User {
    id
    profileURL
    name
    email
  }

  query CurrentUser {
    currentUser {
      ...CurrentUser
    }
  }
`
