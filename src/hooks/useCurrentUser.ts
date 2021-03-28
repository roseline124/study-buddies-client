import gql from 'graphql-tag'
import constate from 'constate'
import { useCurrentUserQuery } from '../generated/graphql'

function useCurrentUser() {
  const { data, loading, error } = useCurrentUserQuery({
    fetchPolicy: 'no-cache',
  })

  return {
    currentUser: data?.currentUser,
    loading,
    error,
  }
}

export const [CurrentUserProvider, useCurrentUserContext] = constate(useCurrentUser)

gql`
  query CurrentUser {
    currentUser {
      id
      profileURL
      name
      email
    }
  }
`
