import React from 'react'
import gql from 'graphql-tag'
import { RouteComponentProps, navigate } from '@reach/router'
import { Button } from 'react-materialize'

import avatar from './avatar-person.svg'
import { ProfileImage_UserFragment } from '../generated/graphql'

interface ProfileImageProps extends RouteComponentProps {
  user?: ProfileImage_UserFragment
}

const ProfileImage: React.FC<ProfileImageProps> = ({ user }) => {
  const profileURL = user?.profileURL
  return user ? (
    <Button
      icon={<img width={92} src={profileURL!} alt="avatar" />}
      onClick={() => navigate(`/profile/${user?.id}`)}
      floating
      large
      node="button"
      waves="light"
    />
  ) : (
    <Button
      icon={<img src={avatar} alt="avatar" />}
      onClick={() => {
        navigate(`${process.env.REACT_APP_SERVER_BASE_URL}/login`)
      }}
      floating
      large
      node="button"
      waves="light"
    />
  )
}

export default ProfileImage

gql`
  fragment ProfileImage_user on User {
    id
    profileURL
  }
`
