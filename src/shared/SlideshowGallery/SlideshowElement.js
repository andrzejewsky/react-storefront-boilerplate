import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: '0 0',
    backgroundRepeat: 'no-repeat',
    height: '584px',
    flex: '0 0 100%',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      height: '400px',
    },

    [theme.breakpoints.down('xs')]: {
      height: '250px',
    }
  }
})

const SlideshowElement = ({ backgroundImage, classes, renderComponent = null }) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    try {
      const fetchImage = require(`../../assets/${backgroundImage}`)

      setImage(fetchImage)
    } catch (e) {
    }
  }, [backgroundImage])

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: image !== null ? `url(${image})` : 'none' }}
    >
      { typeof renderComponent === 'function' && renderComponent() }
    </div>
  )
}



export default withStyles(styles)(SlideshowElement);
