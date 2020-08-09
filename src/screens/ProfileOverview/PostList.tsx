import React from 'react'
import gql from 'graphql-tag'

import { Button, Typography, Hidden, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PostItem from '../../components/PostItem'
import { usePostListQuery, PostOrderField, OrderDirection } from '../../generated/graphql'

const useStyles = makeStyles(theme => ({
  root: {
    hegith: '100%',
    marginLeft: 20,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  menuBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  viewMore: {
    marginRight: 10,
  },
  divider: {
    marginBottom: 30,
  },
  postsWrapper: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'white',
      borderRadius: 5,
    },
  },
}))

const PostList = () => {
  const classes = useStyles()

  const { data, loading } = usePostListQuery({
    variables: {
      input: {
        filterBy: { authorIDs: ['110651788476397555375'] },
        orderBy: { field: PostOrderField.CreatedAt, direction: OrderDirection.Desc },
        pagination: { page: 1, pageSize: 3 },
      },
    },
  })

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <Divider className={classes.divider} />
      </Hidden>

      <div className={classes.menuBar}>
        <Typography variant="h1" className={classes.title}>
          My Posts
        </Typography>
        <Hidden smDown>
          <div>
            <Button color="primary" className={classes.viewMore}>
              view more
            </Button>
            <Button color="primary" variant="contained">
              add post
            </Button>
          </div>
        </Hidden>
      </div>

      <div className={classes.postsWrapper}>
        {data?.postGetMany?.posts?.map(post => (
          <PostItem post={post} loading={loading} />
        ))}
      </div>
    </div>
  )
}

export default PostList

gql`
  query postList($input: PostGetManyInput!) {
    postGetMany(input: $input) {
      posts {
        ...PostItem_post
      }
    }
  }
`
