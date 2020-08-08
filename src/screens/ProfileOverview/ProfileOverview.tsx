import React from 'react'
import gql from 'graphql-tag'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import PageLayout from '../../components/PageLayout'
import Profile from './Profile'
import { useProfileOverview_UserQuery } from '../../generated/graphql'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '50px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '25px 0',
    },
  },
}))

const ProfileOverview = () => {
  const classes = useStyles()
  const { data, loading } = useProfileOverview_UserQuery({ variables: { id: '' } })

  return (
    <PageLayout>
      <Grid container className={classes.root}>
        <Grid item sm={3} xs={12}>
          <Profile user={data?.user || undefined} loading={loading} />
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default ProfileOverview

gql`
  query ProfileOverview_User($id: ID!) {
    user(id: $id) {
      ...Profile_user
    }
  }
`
