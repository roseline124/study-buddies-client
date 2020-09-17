import React, { FC } from 'react'
import gql from 'graphql-tag'

import { Button, Typography, Hidden, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PostItem from '../../components/PostItem'
import PostFormDialog from './PostFormDialog'
import { usePostListQuery, PostOrderField, OrderDirection } from '../../generated/graphql'
import { useCurrentUserContext } from '../../hooks/useCurrentUser'

const useStyles = makeStyles(theme => ({
  root: {
    hegith: '100%',
    marginLeft: 20,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  title: {
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  menuBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
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
  addPostButton: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
}))

interface PostListProps {
  userId?: string
}

const PostList: FC<PostListProps> = ({ userId }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const { currentUser } = useCurrentUserContext()

  const isCurrentUser = userId === currentUser?.id

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const { data, loading, refetch } = usePostListQuery({
    variables: {
      input: {
        filterBy: { authorIDs: [userId] },
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
          {isCurrentUser ? 'My Posts' : 'Posts'}
        </Typography>
        <div>
          <Hidden smDown>
            <Button color="primary" className={classes.viewMore}>
              view more
            </Button>
          </Hidden>
          {isCurrentUser && (
            <Button
              color="primary"
              variant="contained"
              className={classes.addPostButton}
              onClick={handleClickOpen}
            >
              add post
            </Button>
          )}
        </div>
      </div>

      <div className={classes.postsWrapper}>
        {data?.postGetMany?.posts?.map(post => (
          <PostItem post={post} loading={loading} />
        ))}
      </div>

      <PostFormDialog open={open} onClose={handleClose} userId={userId} refetchPost={refetch} />
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
