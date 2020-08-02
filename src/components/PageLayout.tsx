import React from 'react'
import { Box } from '@material-ui/core'
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
    <Box className={classes.root}>
      <Header />
    </Box>
  )
}

export default PageLayout
