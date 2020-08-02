import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Row, Col } from 'react-materialize'

// import RecommendationPostList from '../components/RecommendationPostList'
import Follow from '../components/follow'
import ProfileImage from '../components/ProfileImage'
import gql from 'graphql-tag'
import { useMainScreen_CurrentUserQuery } from '../generated/graphql'

interface MainProps extends RouteComponentProps {}

const MainScreen: React.FC<MainProps> = () => {
  const { data, loading, error } = useMainScreen_CurrentUserQuery()
  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }
  if (error) return null
  const currentUser = data?.currentUser
  const following = currentUser?.followings.length || 0
  const followers = currentUser?.followers.length || 0
  return (
    <Fragment>
      <dl style={{ marginTop: 20 }}>
        <Row>
          <Col s={4}>
            <ProfileImage user={currentUser || undefined} />
          </Col>
          <Col s={8}>
            {currentUser ? (
              <Follow userid={currentUser.id} following={following} followers={followers} />
            ) : null}
          </Col>
        </Row>
      </dl>
      {/* <RecommendationPostList postItems={currentUser?.recommendations} /> */}
      {/* <Favorites /> */}
    </Fragment>
  )
}

export default MainScreen

gql`
  query MainScreen_currentUser {
    currentUser {
      id
      name
      profileURL
      consecutiveStudyDays
      recommendations {
        id
        author {
          id
          name
          email
          profileURL
        }
        url
        isLiked
        likeCount
        title
        description
        previewImage
        createdAt
      }
      followers {
        id
        name
        profileURL
      }
      followings {
        id
        name
        profileURL
      }
    }
  }
`
