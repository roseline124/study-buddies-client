import React, { FC } from 'react'
import gql from 'graphql-tag'
import { SimpleImg } from 'react-simple-img'
import { Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { PostItem_PostFragment } from '../generated/graphql'
import { getEllipsisProps } from '../styles/utils'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    ...getEllipsisProps(1),
    fontSize: 20,
    fontWeight: 400,
  },
  contentWrapper: {
    marginLeft: 20,
  },
  previewImg: {
    minWidth: 150,
  },
  content: {
    ...getEllipsisProps(3),
    marginTop: 10,
  },
}))

interface PostItemProps {
  post?: PostItem_PostFragment
  loading?: boolean
}

const PostItem: FC<PostItemProps> = ({ post, loading }) => {
  const classes = useStyles()
  return (
    // @ts-ignore
    <Link underline="none" href={post?.url || ''} target="_blank">
      <div className={classes.root}>
        <SimpleImg
          className={classes.previewImg}
          src={post?.previewImage || ''}
          width={150}
          height={100}
          imgStyle={{ borderRadius: 5, border: '1px solid #eee' }}
        />
        <div className={classes.contentWrapper}>
          <Typography className={classes.title}>{post?.title || '-'}</Typography>
          <Typography className={classes.content}>{post?.description || '-'}</Typography>
        </div>
      </div>
    </Link>
  )
}

export default PostItem

gql`
  fragment PostItem_post on Post {
    id
    title
    url
    description
    previewImage
    likeCount
    author {
      id
      name
    }
    hashTags {
      id
      name
    }
  }
`
