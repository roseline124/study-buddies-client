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
      backgroundColor: '#f9f9f9',
    },
    container: {},
  }
})

const PageLayout = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <Container className={classes.container} maxWidth="lg">
        sdfjsf
      </Container>
    </div>
  )
}

export default PageLayout
