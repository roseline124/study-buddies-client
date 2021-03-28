import React from 'react'
import { Container, Divider, Typography, Link, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GitHubMarkIcon from '../static/icons/GitHubMark'

const useStyles = makeStyles(theme => ({
  root: {
    height: 80,
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  orgName: {
    fontWeight: 400,
  },
  copyright: {
    fontSize: 13,
  },
  githubWrapper: {
    display: 'flex',
    alignItems: 'center',
    color: '#333',
  },
  githubIcon: {
    marginRight: 10,
    width: '2.5rem',
    height: '2.5rem',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Divider />
      <div className={classes.contentWrapper}>
        <Link underline="none" href="https://github.com/roseline124/study-buddies" target="_blank">
          <div className={classes.githubWrapper}>
            <GitHubMarkIcon className={classes.githubIcon} />
            <Hidden smDown>
              <div>
                <Typography variant="h1" className={classes.orgName}>
                  Study Buddies
                </Typography>
                <Typography>Together is Better! Share your study contents with friends!</Typography>
              </div>
            </Hidden>
          </div>
        </Link>
        <Typography className={classes.copyright}>©2020, roseline124</Typography>
      </div>
    </Container>
  )
}

export default Footer
