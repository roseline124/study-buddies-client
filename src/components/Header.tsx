import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../static/icons/Logo'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 80,
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
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 500,
    letterSpacing: -1,
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <Typography className={classes.logoTitle} color="primary">
        Study Buddies
      </Typography>
    </div>
  )
}

export default Header
