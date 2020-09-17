import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: '#f9f9f9',
  },
  container: {
    minHeight: 'calc(100vh - 150px)', // 70px: header, 80px: footer
  },
})

const PageLayout = ({ children }: any) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <Container className={classes.container} maxWidth="lg">
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default PageLayout
