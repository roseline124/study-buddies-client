import React, { useContext } from 'react'
import gql from 'graphql-tag'
import {
  Avatar,
  ButtonBase,
  Container,
  Divider,
  Typography,
  Link,
  Menu,
  MenuItem,
  Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Logo from '../static/icons/Logo'
import { CurrentUserContext } from '../hooks/CurrentUserProvider'

const useStyles = makeStyles(theme => {
  const flexProps = {
    display: 'flex',
    alignItems: 'center',
  }

  return {
    root: {
      ...flexProps,
      backgroundColor: 'white',
      height: 70,
    },
    container: {
      ...flexProps,
      justifyContent: 'space-between',
    },
    logoWrapper: flexProps,
    logo: {
      width: '3rem',
      height: '3rem',
      color: 'white',
      fill: theme.palette.primary.main,
      borderRadius: '50%',
      marginRight: 10,
      [theme.breakpoints.down('sm')]: {
        width: '2.5rem',
        height: '2.5rem',
      },
    },
    logoTitle: {
      fontSize: 24,
      fontStyle: 'italic',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },
    signIn: {
      fontSize: 16,
      color: theme.palette.text.primary,
    },
    menu: {
      top: '70px !important',
    },
    accountInfo: {
      padding: '6px 16px',
      display: 'block',
    },
    name: {
      fontWeight: 500,
    },
    email: {
      fontWeight: 400,
    },
  }
})

const Header = () => {
  const classes = useStyles()
  const { currentUser } = useContext(CurrentUserContext)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Link href="/" underline="none">
          <div className={classes.logoWrapper}>
            <Hidden smDown>
              <Logo className={classes.logo} />
            </Hidden>
            <Typography className={classes.logoTitle} color="primary">
              Study Buddies
            </Typography>
          </div>
        </Link>
        {currentUser ? (
          <>
            <ButtonBase
              onClick={handleClick}
              aria-controls="header-account-menu"
              aria-haspopup="true"
              href=""
            >
              <Avatar alt="profile-image" src={currentUser?.profileURL || ''} />
            </ButtonBase>
            <Menu
              id="header-account-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
            >
              <div className={classes.accountInfo}>
                <Typography className={classes.name}>{currentUser?.name}</Typography>
                <Typography className={classes.email}>{currentUser?.email}</Typography>
              </div>
              <Divider />
              <MenuItem>
                <Link
                  href={`${process.env.REACT_APP_SERVER_BASE_URL}/logout`}
                  underline="none"
                  color="inherit"
                >
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Link href={`${process.env.REACT_APP_SERVER_BASE_URL}/login`} underline="none">
            <Typography className={classes.signIn} variant="h1">
              LogIn
            </Typography>
          </Link>
        )}
      </Container>
    </div>
  )
}

export default Header
