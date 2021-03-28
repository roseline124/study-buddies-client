import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Col } from 'react-materialize'
import './list.css'
import { Post } from '../generated/graphql'
import PostCard from './post-card'

interface RecommendationPostListProps extends RouteComponentProps {
  postItems?: Post[]
}

const RecommendationPostList: React.FC<RecommendationPostListProps> = ({ postItems }) => {
  if (!postItems?.length) {
    return (
      <div style={{ verticalAlign: 'middle' }}>
        There is no item to recommend now.
        <br />
        <br />
        Press the profile image and post one by clicking the floating button on the bottom right.
      </div>
    )
  }
  return (
    <dl className="recommendations">
      <h5>Recommendations</h5>
      {postItems?.map(item => (
        <Fragment key={item.id}>
          <Col m={6}>
            <PostCard item={item} />
          </Col>
        </Fragment>
      ))}
    </dl>
  )
}

export default RecommendationPostList
