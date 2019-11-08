import React from 'react'
import { withStyles } from '@material-ui/core'
import Container from 'react-storefront/Container'
import mobileAppImage from './mobile-app.png'
import pwaLogo from './pwa-logo.png'

const styles = theme => ({
  root: {
    marginTop: '60px'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    flex: '0 1 520px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  appImage: {
    flex: '0',
    [theme.breakpoints.up('md')]: {
      paddingRight: '30px'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  subtitle: {
    fontSize: '24px',
    color: '#a3a5ad'
  },
  title: {
    fontSize: '36px',
    color: theme.palette.dark,
    fontWeight: '500'
  },
  buttons: {
    paddingTop: '20px',
    margin: '0 -10px',
    '& button': {
      margin: '5px 10px'
    }
  },
  pwa: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  pwaPowered: {
    color: '#7d838c',
    fontStyle: 'italic'
  },
  pwaLogo: {
    width: '50px',
    height: '50px',
    margin: '0 15px'
  },
})

const MobileAppBanner = ({ classes }) => (
  <div className={classes.root}>
    <Container className={classes.container}>
      <div className={classes.content}>
        <div className={classes.subtitle}>Fashion to Take Away</div>
        <div className={classes.title}>You can install this Progressive Web App on your device’s Home Screen!</div>
        <div className={classes.pwa}>
        <div className={classes.pwaPowered}>Powered by: </div>
          <img className={classes.pwaLogo} src={pwaLogo} alt="" />
        </div>
      </div>
      <img className={classes.appImage} src={mobileAppImage} alt="react storefront app" />
    </Container>
  </div>
)

export default withStyles(styles)(MobileAppBanner)
