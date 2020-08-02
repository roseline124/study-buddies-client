import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../static/icons/Logo'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '3rem',
    height: '3rem',
    color: 'white',
    fill: theme.palette.primary.main,
    borderRadius: '50%',
    marginRight: 10,
  },
  logoTitle: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 500,
    letterSpacing: -1,
  },
  signIn: {
    fontSize: 16,
    color: theme.palette.text.primary,
  },
}))

// TODO: !currentUser -> signin render
const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Link href="/" underline="none">
        <div className={classes.logoWrapper}>
          <Logo className={classes.logo} />
          <Typography className={classes.logoTitle} color="primary">
            Study Buddies
          </Typography>
        </div>
      </Link>
      <Link href={`${process.env.REACT_APP_SERVER_BASE_URL}/login`} underline="none">
        <Typography className={classes.signIn} variant="h1">
          Sign In
        </Typography>
      </Link>
    </div>
  )
}

export default Header
