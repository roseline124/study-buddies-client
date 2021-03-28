import React from 'react'
import gql from 'graphql-tag'
import { Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import PageLayout from '../../components/PageLayout'
import Profile from './Profile'
import PostList from './PostList'
import Streak from './Streak'
import { useProfileOverview_UserQuery } from '../../generated/graphql'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '50px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '25px 0',
    },
  },
  profile: {
    marginBottom: 10,
  },
}))

const ProfileOverview = () => {
  const classes = useStyles()
  const { data, loading } = useProfileOverview_UserQuery({ variables: { id: '110651788476397555375' } })

  return (
    <PageLayout>
      <Grid container className={classes.root}>
        <Grid item sm={3} xs={12} className={classes.profile}>
          <Profile user={data?.user || undefined} loading={loading} />
          <Hidden smDown>
            <Streak user={data?.user || undefined} loading={loading} />
          </Hidden>
        </Grid>
        <Hidden mdUp>
          <Grid item sm={3} xs={12}>
            <Streak user={data?.user || undefined} loading={loading} />
          </Grid>
        </Hidden>
        <Grid item sm={9} xs={12}>
          <PostList userId={data?.user?.id} />
        </Grid>
      </Grid>
      {/* <Grid container>
        <Hidden smDown>
          <Grid item xs={3}>
            <Streak user={data?.user || undefined} loading={loading} />
          </Grid>
        </Hidden>
      </Grid> */}
    </PageLayout>
  )
}

export default ProfileOverview

gql`
  query ProfileOverview_User($id: ID!) {
    user(id: $id) {
      ...Profile_user
      ...Streak_user
    }
  }
`
