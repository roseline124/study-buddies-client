import React, { FC } from 'react'
import gql from 'graphql-tag'
import { SimpleImg } from 'react-simple-img'
import { Typography, Link, Divider, Hidden, IconButton } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { PostItem_PostFragment } from '../generated/graphql'
import { getEllipsisProps } from '../styles/utils'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      backgroundColor: 'transparent',
    },
  },
  title: {
    ...getEllipsisProps(1),
    width: '100%',
    fontSize: 20,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
      fontSize: 16,
    },
  },
  contentWrapper: {
    margin: '0 20px',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  previewImg: {
    minWidth: 150,
    width: 150,
    height: '100px !important',
    borderRadius: 5,
    [theme.breakpoints.down('sm')]: {
      height: '200px !important',
      width: '100%',
    },
  },
  previewImgSkeleton: {
    minWidth: 150,
    border: '1px solid #eee',
    borderRadius: 5,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
  },
  content: {
    ...getEllipsisProps(3),
    marginTop: 10,
  },
  divider: {
    width: '90%',
    margin: '0 auto',
  },
  likeIcon: {
    padding: 0,
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  link: {
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      backgroundColor: 'transparent',
    },
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
    <>
      <div className={classes.root}>
        <Link underline="none" href={post?.url || ''} target="_blank" className={classes.link}>
          {!loading ? (
            <SimpleImg
              className={classes.previewImg}
              src={post?.previewImage || ''}
              imgStyle={{ borderRadius: 5, border: '1px solid #eee' }}
            />
          ) : (
            <Skeleton variant="rect" className={classes.previewImgSkeleton} />
          )}

          <div className={classes.contentWrapper}>
            {!loading ? (
              <Typography className={classes.title}>{post?.title || '-'}</Typography>
            ) : (
              <Skeleton variant="text" className={classes.title} />
            )}
            {!loading ? (
              <Typography className={classes.content}>{post?.description || '-'}</Typography>
            ) : (
              <>
                <Skeleton variant="text" className={classes.content} />
                <Skeleton variant="text" className={classes.content} />
              </>
            )}
          </div>
        </Link>

        <Hidden smDown>
          <div className={classes.iconWrapper}>
            <IconButton classes={{ root: classes.likeIcon }}>
              <FavoriteBorderIcon />
            </IconButton>
          </div>
        </Hidden>
      </div>
      <Hidden mdUp>
        <Divider className={classes.divider} />
      </Hidden>
    </>
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
  }
`
