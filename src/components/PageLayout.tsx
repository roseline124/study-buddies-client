import React from 'react'
import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'

const useStyles = makeStyles(() => {
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexFlow: 'column',
      minHeight: '100vh',
      backgroundColor: 'white',
    },
  }
})

const PageLayout = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="lg">
      <Header />
    </Container>
  )
}

export default PageLayout
