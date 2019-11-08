import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '50%',
    padding: '5rem 5rem 5rem 7rem',
    height: '100%',
    width: '50%',
    fontWeight: 500,
    lineHeight: 1.6,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '0rem 6rem 5rem 1rem'
    }
  },
  collection: {
    marginBottom: '5rem',
    width: 'min-content',
    paddingLeft: '36px',
    fontSize: '.75rem',
    textTransform: 'uppercase',
    borderLeft: '1px solid #bebfc4',
    color: '#bebfc4',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.35rem',
    }
  },
  slogan: {
    color: '#1d1f22',
    fontSize: '2.25rem',
    lineHeight: 1.38,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    }
  },
  button: {
    padding: '1rem 2.5rem',
    fontSize: '.875rem',
    border: 'none',
    outline: 'none',
    color: '#fff',
    backgroundColor: '#5ece7b',
    fontWeight: 400,
    lineHeight: 1.6,
    textTransform: 'uppercase',
    cursor: 'pointer',
    margin: '0',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },

    '&:hover': {
      backgroundColor: '#72d48b',
    }
  }
})

const SlideshowExampleContent = ({ align = 'left', classes }) => (
  <div className={classes.root} style={ align === 'left' ? { left: 0 } : { right: 0 }}>
    <span className={classes.collection}>
      Summer Collection 2019<br />
    </span>
    <span className={classes.slogan}>
      Colorful summer dresses are already in store
    </span>
    <div>
      <button className={classes.button}>
        Learn more
      </button>
    </div>
  </div>
)

export default withStyles(styles)(SlideshowExampleContent)
