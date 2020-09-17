import React, { FC } from 'react'
import gql from 'graphql-tag'
import Skeleton from '@material-ui/lab/Skeleton'
import { Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Profile_UserFragment } from '../../generated/graphql'
import DefaultProfileImage from '../../static/images/default-profile.png'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  profileImg: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    border: '1px solid #eee',
    [theme.breakpoints.down('sm')]: {
      width: 80,
    },
  },
  profileImgWrapper: {
    width: 225,
    height: 225,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: 80,
      height: 80,
    },
  },
  username: {
    margin: '35px auto',
    fontSize: 27,
    fontWeight: 400,
    width: 225,
    height: 27,
    [theme.breakpoints.down('sm')]: {
      width: 80,
      margin: '15px auto',
      fontSize: 18,
    },
  },
  followWrapper: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 5,
    border: '1px solid #eee',
    padding: 20,
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 15,
      height: 45,
    },
  },
  followWrapperSkeleton: {
    width: 225,
    height: 60,
    marginLeft: 15,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 80,
    },
  },
  followLabelWrapper: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  followLabel: {
    marginRight: 10,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 5,
    },
  },
  followCount: {
    fontWeight: 500,
  },
  profileSkeleton: {
    width: 225,
    height: 225,
    [theme.breakpoints.down('sm')]: {
      width: 80,
      height: 80,
    },
  },
  imgAndNameWrapper: {
    display: 'flex',
  },
}))

interface ProfileProps {
  user?: Profile_UserFragment
  loading?: boolean
}

const Profile: FC<ProfileProps> = ({ user, loading }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <>
        <div>
          {!loading ? (
            <div className={classes.profileImgWrapper}>
              <img
                className={classes.profileImg}
                alt="profile-img"
                src={user?.profileURL || DefaultProfileImage}
              />
            </div>
          ) : (
            <Skeleton variant="circle" className={classes.profileSkeleton} />
          )}
          {!loading ? (
            <Typography className={classes.username}>{user?.name}</Typography>
          ) : (
            <Skeleton variant="text" className={classes.username} />
          )}
        </div>
        {!loading ? (
          <div className={classes.followWrapper}>
            <div className={classes.followLabelWrapper}>
              <Typography className={classes.followLabel}>follow</Typography>
              <Typography className={classes.followCount}>{user?.followers?.length || 0}</Typography>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className={classes.followLabelWrapper}>
              <Typography className={classes.followLabel}>following</Typography>
              <Typography className={classes.followCount}>{user?.followings?.length || 0}</Typography>
            </div>
          </div>
        ) : (
          <Skeleton variant="rect" className={classes.followWrapperSkeleton} />
        )}
      </>
    </div>
  )
}

export default Profile

gql`
  fragment Profile_user on User {
    id
    name
    profileURL
    followers {
      id
    }
    followings {
      id
    }
  }
`
